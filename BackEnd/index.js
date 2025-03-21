import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import bookRouter from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());

app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;
// // connect to mongoBD
try {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log("Connected to MongoDB");
} catch (error) {
  console.log("Error", error);
}

// // defining routes
app.use("/book", bookRouter);
app.use("/user", userRoute);
app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
