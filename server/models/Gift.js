import mongoose from "mongoose";

const GiftSchema = new mongoose.Schema({
    name:       { type: String,     required: true },
    website:    { type: String,     required: true },
    threshold:  { type: String,     required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

export default mongoose.model("Gift", GiftSchema);