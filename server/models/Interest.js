import mongoose from "mongoose";

const InterestSchema = new mongoose.Schema({
    name:       { type: String,     required: true },
    category:   { type: String,     required: true },
    gifts:      { type: Array,      required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
})

export default mongoose.model("Interest", InterestSchema);