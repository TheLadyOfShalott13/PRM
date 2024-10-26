import express from "express";
import multer from "multer";
import bodyParser from "body-parser";
import {
    createPerson,
    deletePerson,
    updatePerson,
    getOnePerson,
    getAllPersons,
    getBirthdays
} from "../controllers/person.js";

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

router.post("/create", upload.single('img'), createPerson);
router.put("/update/:id", upload.single('img'), updatePerson);
router.delete("/delete/:id", deletePerson);
router.get("/get/:id", getOnePerson);
router.get("/list/:userId", getAllPersons);
router.post("/birthdays/:userId", getBirthdays);

export default router;