import product from "../../../models/product/index.js";

export default async (req, res) => {
  console.log(req.productId);
  let data = await product.deleteOne(req.productId);
};
