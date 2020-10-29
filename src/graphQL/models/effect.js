import mongoose from 'mongoose';

const effectSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    pointShape: {
      type: String,
      required: false,
    },
    bypass: {
      type: Boolean,
      required: true,
    },
    settings: [
      new mongoose.Schema({
        type: {
          type: String,
          required: true,
        },
        displayName: {
          type: String,
          required: true,
        },
        value: {
          value: {
            type: Number,
            required: true,
          }
        },
        max: {
          value: {
            type: Number,
            required: true,
          }
        },
        min: {
          value: {
            type: Number,
            required: true,
          }
        },
        step: {
          value: {
            type: Number,
            required: true,
          }
        },
      })
    ],
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  },
  {
    timestamps: true,
  },
);

const effect = mongoose.model('Effect', effectSchema);

export default effect;
