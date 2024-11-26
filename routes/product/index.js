import Router from "express-promise-router";
import get from "./get/get.js";
import post from "./post/post.js";

const router = Router();

router.post("/", post);
router.get("/", get);

export default router;
