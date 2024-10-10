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

//get all persons
export const getAllPersons = async (req, res, next) => {
    const userId = req.params.userId;

    try {
        const persons = await Person.find({user:userId});
        res.status(200).json(persons);
    } catch (err) {
        next(err)
    }
}

export const getOnePerson = async (req, res, next) => {
    const personId = req.params.id;

    try {
        const person = await Person.find({ _id: personId });
        res.status(200).json(person);
    } catch (err) {
        next(err)
    }
}