import Router from "express-promise-router";
import get from "./get/get.js";
import post from "./post/post.js";
import _delete from "./delete/delete.js";
import update from "./update/update.js";
import extractParam from "../../middleware/extractParams.js";

const router = Router();

router.post("/", post);
router.get("/", get);
router.delete("/:productId", extractParam("productId"), _delete);

// update functionality
router.put("/:productId", extractParam("productId"), update);

export default router;
