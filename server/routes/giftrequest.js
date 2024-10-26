import express from "express";
import {
    createGiftRequest,
    getOneGiftRequest,
	getAllGiftRequests,
    updateGiftRequest
} from "../controllers/giftrequest.js";

const router = express.Router();

router.post("/create", createGiftRequest);
router.get("/get/:id", getOneGiftRequest);
router.get("/status/:status", getAllGiftRequests);
router.put("/update/:id", updateGiftRequest);

export default router;