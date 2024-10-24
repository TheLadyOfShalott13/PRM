import GiftRequest from "../models/GiftRequest.js";

export const createGiftRequest = async (req, res, next) => {
    const newGiftRequest = new GiftRequest(req.body)

    try {
        const savedGiftRequest = await newGiftRequest.save();
        res.status(200).json(savedGiftRequest);
    }
    catch (err) {
        next(err)
    }
}

export const deleteGiftRequest = async (req, res, next) => {
    try {
        await GiftRequest.findByIdAndDelete(req.params.id);
        res.status(200).json("The gift request has been deleted");
    } catch (err) {
        next(err);
    }
}

export const getOneGiftRequest = async (req, res, next) => {
    const reqId = req.params.id;

    try {
        const giftRequest = await GiftRequest.find({ _id: reqId });
        res.status(200).json(giftRequest);
    } catch (err) {
        next(err)
    }
}

//get all gift requests by status
export const getAllGiftRequests = async (req, res, next) => {
    const status = req.params.status;

    try {
        const giftRequest = await GiftRequest.find({ "status": status }); //multiple parameters for selection, and check for when second parameter is a list
        res.status(200).json(giftRequest);
    } catch (err) {
        next(err)
    }
}

//there shall be no delete gift request here
//any modifications to gift request must undergo 2 steps
//delete and then create anew