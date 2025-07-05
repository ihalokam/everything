import Result from '../models/result.model.js';

// Standardized response format
const formatResponse = (success, data, message = '') => ({
  success,
  data,
  message
});

// Create a new lottery result
export const createResult = async (req, res) => {
  try {
    const result = req.body;

    // Basic schema validation
    if (!result.lotteryName || !result.lotteryNumber || !result.drawDate || !Array.isArray(result.prizes)) {
      return res.status(400).json(
        formatResponse(false, null, 'Missing required fields or invalid structure')
      );
    }

    // Prize validation
    for (const prize of result.prizes) {
      if (!prize.label || !prize.amount || !prize.type) {
        return res.status(400).json(
          formatResponse(false, null, `Incomplete prize data: ${JSON.stringify(prize)}`)
        );
      }

      if (prize.type === 'full' && (!Array.isArray(prize.tickets) || prize.tickets.length === 0)) {
        return res.status(400).json(
          formatResponse(false, null, `Prize '${prize.label}' requires tickets for type 'full'`)
        );
      }

      if (prize.type === 'ending' && (!Array.isArray(prize.ticketEndings) || prize.ticketEndings.length === 0)) {
        return res.status(400).json(
          formatResponse(false, null, `Prize '${prize.label}' requires ticketEndings for type 'ending'`)
        );
      }
    }

    const newResult = new Result(result);
    await newResult.save();
    
    res.status(201).json(formatResponse(true, newResult));
  } catch (error) {
    res.status(500).json(
      formatResponse(false, null, 'Error saving result: ' + error.message)
    );
  }
};

// Get all results with optional pagination
export const getAllResults = async (req, res) => {
  try {
    const { page = 1, limit = 10, lotteryName } = req.query;

    // Add filter for lotteryName if provided
    const filter = lotteryName
      ? { lotteryName: { $regex: `^${lotteryName}$`, $options: 'i' } }
      : {};

    const results = await Result.find(filter)
      .sort({ drawDate: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .select('lotteryName lotteryNumber drawDate prizes');

    const count = await Result.countDocuments(filter);

    const formattedResults = results.map((doc) => {
      const firstPrize = doc.prizes?.find(p => p.label === '1st');
      return {
        _id: doc._id,
        lotteryName: doc.lotteryName,
        lotteryNumber: doc.lotteryNumber,
        drawDate: doc.drawDate,
        firstPrizeAmount: firstPrize?.amount || 0
      };
    });

    res.status(200).json(formatResponse(true, {
      results: formattedResults,
      totalPages: Math.ceil(count / limit),
      currentPage: Number(page)
    }));
  } catch (error) {
    res.status(500).json(
      formatResponse(false, null, 'Failed to get results: ' + error.message)
    );
  }
};
// Get result by lottery number (updated from lotteryName)
export const getResultByLotteryNumber = async (req, res) => {
  try {
    const { lotteryNumber } = req.params;

    if (!lotteryNumber) {
      return res.status(400).json(
        formatResponse(false, null, 'Lottery number is required')
      );
    }

    const result = await Result.findOne({ lotteryNumber });

    if (!result) {
      return res.status(404).json(
        formatResponse(false, null, 'No result found with this lottery number')
      );
    }

    res.status(200).json(formatResponse(true, result));
  } catch (error) {
    res.status(500).json(
      formatResponse(false, null, 'Error fetching result: ' + error.message)
    );
  }
};

// Update a result by lottery number
export const updateResult = async (req, res) => {
  try {
    const { lotteryNumber } = req.params;
    const updatedData = req.body;

    if (!lotteryNumber) {
      return res.status(400).json(
        formatResponse(false, null, 'Lottery number is required')
      );
    }

    const updatedResult = await Result.findOneAndUpdate(
      { lotteryNumber },
      { $set: updatedData },
      { new: true, runValidators: true }
    );

    if (!updatedResult) {
      return res.status(404).json(
        formatResponse(false, null, 'Result not found')
      );
    }

    res.status(200).json(formatResponse(true, updatedResult));
  } catch (error) {
    res.status(500).json(
      formatResponse(false, null, 'Error updating result: ' + error.message)
    );
  }
};

// Delete a result by lottery number
export const deleteResult = async (req, res) => {
  try {
    const { lotteryNumber } = req.params;

    if (!lotteryNumber) {
      return res.status(400).json(
        formatResponse(false, null, 'Lottery number is required')
      );
    }

    const deletedResult = await Result.findOneAndDelete({ lotteryNumber });

    if (!deletedResult) {
      return res.status(404).json(
        formatResponse(false, null, 'Lottery result not found')
      );
    }

    res.status(200).json(
      formatResponse(true, deletedResult, 'Lottery result deleted successfully')
    );
  } catch (error) {
    res.status(500).json(
      formatResponse(false, null, 'Error deleting result: ' + error.message)
    );
  }
};


