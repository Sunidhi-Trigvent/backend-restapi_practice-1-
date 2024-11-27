import product from "../../../models/product/index.js";

export default async (req, res) => {
  let data = await product.find();
  console.log(data);
  res.send(data);
};
