import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: "number",
    },

    price: {
      type: "number",
    },

    brand: {
      type: "string",
    },

    category: {
      type: "string",
    },
  },

  {
    timestamps: true,
  }
);

export default productSchema;
