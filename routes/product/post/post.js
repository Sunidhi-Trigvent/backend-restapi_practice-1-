import { product } from "../../../models/product/index";

export default async (req, res) => {
  try {
    const { body } = req;
    let data = new product(body);
    let result = await data.save();
    console.log(result);
    response.send(result);
  } catch (error) {
    res.status(403).send(error);
  }
};
