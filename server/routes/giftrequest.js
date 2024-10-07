import express from "express";
import {
    createGiftRequest,
    deleteGiftRequest,
    getGiftRequest,
	getActiveGiftRequests
} from "../controllers/giftrequest.js";

const router = express.Router();

router.post("/create", createGiftRequest);
router.delete("/delete/:id", deleteGiftRequest);
router.get("/get/:id", getGiftRequest);
router.get("/gift/:id", getActiveGiftRequests);

export default router;