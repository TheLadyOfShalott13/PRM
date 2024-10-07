import mongoose from "mongoose";

const GiftRequestSchema = new mongoose.Schema({
    gift: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Gift'
    },
    giftee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person'
    },
    category:           { type: String,         required: true },
    website:            { type: String,         required: true },
    price:              { type: Float64Array,   required: true },
    status:             { type: String,         default: "purchased" },
    date_of_purchase:   { type: Date,           required: true },
    date_of_delivery:   { type: Date,           required: true },
}, {
    timestamps: true
})

export default mongoose.model("GiftRequest", GiftRequestSchema);