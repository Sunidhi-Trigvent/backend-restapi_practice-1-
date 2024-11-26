import product from "../../../models/index.js";

export default async (req, res) => {
  let data = await product.find();
  console.log(data);
  res.send(data);
};
