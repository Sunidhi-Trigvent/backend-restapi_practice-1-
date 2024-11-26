import Router from "express-promise-router";
import get from "./product/get/get.js";

const router = Router();

router.get("/", get);

export default router;
