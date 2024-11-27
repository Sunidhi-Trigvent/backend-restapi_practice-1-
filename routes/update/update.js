import product from "../../models/product/index.js";

export default async (req, res) => {
  // Extract the productId from the request parameters
  const { productId } = req.params;

  console.log(productId);
  let data = await product.updateOne({ _id: productId }, { $set: req.body });
};
