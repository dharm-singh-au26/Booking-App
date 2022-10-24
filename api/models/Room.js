import mongoose, { Schema } from "mongoose";

const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requires: true,
    },
    price: {
      type: Number,
      requires: true,
    },
    maxPeople: {
      type: Number,
      requires: true,
    },

    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [{ number: Number, unavailableDates: { type: [Date] } }],
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
 