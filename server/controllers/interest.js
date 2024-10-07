import Interest from "../models/Interest.js";

export const createInterest = async (req, res, next) => {
    const newInterest = new Interest(req.body)

    try {
        const savedInterest = await newInterest.save();
        res.status(200).json(savedInterest);
    }
    catch (err) {
        next(err)
    }
}

export const deleteInterest = async (req, res, next) => {
    try {
        await Interest.findByIdAndDelete(req.params.id);
        res.status(200).json("The selected interest has been deleted");
    } catch (err) {
        next(err);
    }
};

//not sure yet what to do with this
export const getInterest = async (req, res, next) => {
    const interestId = req.params.id;

    try {
        const interest = await Interest.find({ company: userId });
        res.status(200).json(customers);
    } catch (err) {
        next(err)
    }
}


export const updateInterest = async (req, res, next) => {

    try {
        const interest = await Interest.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(interest);
    } catch (err) {
        next(err);
    }
}