import mongoose from "mongoose";
import productSchema from "./Schema.js";

const product = mongoose.model("products", productSchema);

export default product;
