import express from "express";
import {
    createPerson,
    deletePerson,
	getPeopleOnSameBirthday,
    updatePerson,
} from "../controllers/person.js";

const router = express.Router();

router.post("/create", createPerson);
router.put("/update/:id", updatePerson);
router.get("/birthday/:date", getPeopleOnSameBirthday);
router.delete("/delete/:id", deletePerson);

export default router;