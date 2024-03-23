import mongoose from 'mongoose';
const authSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requidred: true,
      unique: true,
    },
    email: {
      type: String,
      requidred: true,
      unique: true,
    },
    password: {
      type: String,
      requidred: true,
    },
  },
  { timestamps: true }
);

export const AuthModel = mongoose.model('auth', authSchema);
