import express from "express";
import {
    createInterest,
    deleteInterest,
    getOneInterest,
    updateInterest,
    getAllInterests
} from "../controllers/interest.js";

const router = express.Router();

router.post("/create", createInterest);
router.put("/update/:id", updateInterest);
router.delete("/delete/:id", deleteInterest);
router.get("/get/:id", getOneInterest);
router.get("/list/:userId", getAllInterests);

export default router;