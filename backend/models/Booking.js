import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  userId: {
    type: String,
  },
  userEmail: {
    type: String,
  },
  tourName: {
    type: String,
    required: true,
  },
  FullName: {
    type: String,
    required: true,
  },
  groupSize: {
    type: Number,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Booking", BookingSchema);
