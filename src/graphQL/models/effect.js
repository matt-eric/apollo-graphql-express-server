import mongoose from 'mongoose';

const effectSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  },
);

const effect = mongoose.model('Effect', effectSchema);

export default effect;
