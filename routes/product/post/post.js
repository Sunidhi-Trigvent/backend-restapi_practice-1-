import product from "../../../models/product/index.js";

export default async (req, res) => {
  try {
    const { body } = req;
    let data = new product(body);
    let result = await data.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    res.status(403).send(error);
  }
};
