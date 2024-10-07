import mongoose from "mongoose";

const InterestSchema = new mongoose.Schema({
    name:       { type: String,     required: true },
    category:   { type: String,     required: true },
    gifts:      { type: Array,      required: true },
}, {
    timestamps: true
})

export default mongoose.model("Interest", InterestSchema);