import express from "express";
import {
    createPerson,
    deletePerson,
	getPeopleOnSameBirthday,
    updatePerson,
    getOnePerson,
    getAllPersons
} from "../controllers/person.js";

const router = express.Router();

router.post("/create", createPerson);
router.put("/update/:id", updatePerson);
router.delete("/delete/:id", deletePerson);
router.get("/get/:id", getOnePerson);
router.get("/list/:userId", getAllPersons);
router.get("/birthday/:date", getPeopleOnSameBirthday);

export default router;