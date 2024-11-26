import { product } from "../../../models/product/index";

export default async (req, res) => {
  console.log(req.params);
  let data = await product.deleteOne(req.params);
};
