import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

import tourRoute from "./routers/tour.js";
import userRoute from "./routers/user.js";
import authRoute from "./routers/auth.js";
import bookingRoute from "./routers/booking.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
  origin: true,
  credentials: true,
};

//database connection
mongoose.set("strictQuery", false);
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB database connected");
  } catch (error) {
    console.log("MongoDB database connection failed");
  }
};

//middleware
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/tours", tourRoute);
app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/book", bookingRoute);

app.listen(port, () => {
  connect();
  console.log("server listening on port", port);
});
