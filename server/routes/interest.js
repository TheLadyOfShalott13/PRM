import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import {
    createInterest,
    deleteInterest,
    getOneInterest,
    updateInterest,
    getAllInterests
} from "../controllers/interest.js";

const router = express.Router();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

const upload = multer({storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})});

router.post("/create", upload.single('img'), createInterest);
router.put("/update/:id", upload.single('img'), updateInterest);
router.delete("/delete/:id", deleteInterest);
router.get("/get/:id", getOneInterest);
router.get("/list/:userId", getAllInterests);

export default router;