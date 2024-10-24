import express from "express";
import {
    createGiftRequest,
    getOneGiftRequest,
	getAllGiftRequests
} from "../controllers/giftrequest.js";

const router = express.Router();

router.post("/create", createGiftRequest);
router.get("/get/:id", getOneGiftRequest);
router.get("/status/:status", getAllGiftRequests);

export default router;