import mongoose from 'mongoose';

const ticketSchema = new mongoose.Schema({
  number: { type: String, required: true },
  location: { type: String } // optional (e.g., PATTAMBI)
}, { _id: false });

const prizeSchema = new mongoose.Schema({
  label: { type: String, required: true }, // e.g., "1st", "Consolation", "4th"
  amount: { type: Number, required: true },
  type: {
    type: String,
    enum: ['full', 'ending'], // full = specific ticket(s), ending = ending numbers
    required: true
  },
  tickets: [ticketSchema],       // for 'full' type
  ticketEndings: [String]        // for 'ending' type
}, { _id: false });

const lotteryResultSchema = new mongoose.Schema({
  lotteryName: {
    type: String,
    required: true
  },
  lotteryNumber: {
    type: String,
    required: true,
    index: true
  },
  drawDate: {
    type: Date,
    required: true,
    index: true
  },
  prizes: [prizeSchema] // flexible array of prizes
}, {
  timestamps: true
});

lotteryResultSchema.index({ lotteryNumber: 1, drawDate: 1 }, { unique: true });

const LotteryResult = mongoose.model('Result', lotteryResultSchema);
export default LotteryResult;
