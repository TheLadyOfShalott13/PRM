import Gift from "../models/Gift.js";

export const createGift = async (req, res, next) => {
    const newGift = new Gift(req.body)

    try {
        const savedGift = await newGift.save();
        res.status(200).json(savedGift);
    }
    catch (err) {
        next(err)
    }
}

export const deleteGift = async (req, res, next) => {
    try {
        await Gift.findByIdAndDelete(req.params.id);
        res.status(200).json("The selected gift has been deleted");
    } catch (err) {
        next(err);
    }
};

//check how to find the related interests when the search parameter is a list within the document
export const getRelatedInterests = async (req, res, next) => {
    const giftId = req.params.giftId;

    try {
        const interests = await Interest.find({ gift: giftId }); //gift is an array/list
        res.status(200).json(interests);
    } catch (err) {
        next(err)
    }
}

//get one gift
export const getOneGift = async (req, res, next) => {
    const giftId = req.params.id;

    try {
        const gift = await Gift.find({_id:giftId}); //gift is an array/list
        res.status(200).json(gift);
    } catch (err) {
        next(err)
    }
}

//get all gifts
export const getAllGifts = async (req, res, next) => {
    const giftId = req.params.id;

    try {
        const gifts = await Gift.find();
        res.status(200).json(gifts);
    } catch (err) {
        next(err)
    }
}

export const updateGift = async (req, res, next) => {

    try {
        const gift = await Gift.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true }
        );
        res.status(200).json(gift);
    } catch (err) {
        next(err);
    }
}