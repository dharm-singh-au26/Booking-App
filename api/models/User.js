import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requires: true,
      unique: true,
    },
    email: {
      type: String,
      requires: true,
      unique: true,
    },
    password: {
      type: String,
      requires: true,
    },

    isAdmin: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", UserSchema);
