import express from "express";
import {
    createGift,
    updateGift,
    deleteGift,
    getOneGift,
    getAllGifts
} from "../controllers/gift.js";

const router = express.Router();

router.post("/create", createGift);
router.put("/update/:id", updateGift);
router.delete("/delete/:id", deleteGift);
router.get("/get/:id/", getOneGift);
router.get("/list", getAllGifts);

export default router;