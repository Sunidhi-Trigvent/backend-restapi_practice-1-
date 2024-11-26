import mongoose from "mongoose";

const productSchema = mongoose.Schema(
  {
    name: {
      type: "string",
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
