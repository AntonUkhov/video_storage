import Router from "express";
import VideoController from "./videoController.js";

const router = new Router()

router.post('/download', VideoController.download)
router.get('/video/:id', VideoController.getvideo)
router.delete('/delete_video/:id', VideoController.delete)

export default router;