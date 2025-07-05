import express from 'express';
import {
  createResult,
  getAllResults,
  getResultByLotteryNumber,
  updateResult,
  deleteResult,
} from '../controllers/result.controller.js';

const router = express.Router();

router.post('/', createResult);
router.get('/', getAllResults); // supports ?lotteryName=...
router.get('/:lotteryNumber', getResultByLotteryNumber);
router.put('/:lotteryNumber', updateResult);
router.delete('/:lotteryNumber', deleteResult);

export default router;