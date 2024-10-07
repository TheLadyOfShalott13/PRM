import Person from "../models/Person.js";

export const createPerson = async (req, res, next) => {
    const newPerson = new Person(req.body)

    try {
        const savedPerson = await newPerson.save();
        res.status(200).json(savedPerson);
    }
    catch (err) {
        next(err)
    }
}

export const deletePerson = async (req, res, next) => {
    try {
        await Person.findByIdAndDelete(req.params.id);
        res.status(200).json("The person has been deleted. (Though hopefully not from your life)");
    } catch (err) {
        next(err);
    }
};

export const getPeopleOnSameBirthday = async (req, res, next) => {
    const birthday = req.params.date;

    try {
        const people = await Person.find({ birthday: birthday });
        res.status(200).json(people);
    } catch (err) {
        next(err)
    }
}

export const updatePerson = async (req, res, next) => {

    try {
        const person = await Person.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(person);
    } catch (err) {
        next(err);
    }
}