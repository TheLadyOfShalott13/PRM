import express from "express";
import {
    createInterest,
    deleteInterest,
    getInterest,
    updateInterest,
} from "../controllers/interest.js";

const router = express.Router();

router.post("/create", createInterest);
router.put("/update/:id", updateInterest);
router.delete("/delete/:id", deleteInterest);
router.get("/get/:userId", getInterest);

export default router;