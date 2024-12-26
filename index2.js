import express from "express";
// import userRouter from "./routes/userRoutes.js";
import mongoose from "mongoose";
import cors from "cors";
//import productRouter from "./routes/productsRoutes.js";
const app = express();
app.use(express.json());
app.use(cors());


// app.use("/users", userRouter);
app.use("/products", productRouter)


mongoose
  // .connect("mongodb://127.0.0.1:27017/ecomm1")
  .connect("mongodb+srv://gurlhosurashwini:m4JtmDr6x72wZrvL@cluster0.l7jxk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/ecomm1")
  .then(() => {
    app.listen(8080, () => {
      console.log("Server Started on port 8080");
    });
  })
  .catch((error) => {
    console.log(error);
  });