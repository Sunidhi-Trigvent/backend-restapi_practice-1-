import Router from "express-promise-router";
import product from "./product/index.js";

const router = Router();

router.use("/product", product);

export default router;
