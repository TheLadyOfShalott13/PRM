import mongoose from "mongoose";

const PersonSchema = new mongoose.Schema({
    name:       	{ type: String,     required: true },
    email:      	{ type: String,     required: true },
    phone:      	{ type: String,     required: true },
    birthday:   	{ type: Date,       required: true },
    address:    	{ type: String,     required: true },
    imp_dates:  	{ type: Array,      required: true },
    interests:  	{ type: Array,      required: false },
	loved_gifts:  	{ type: Array,      required: false },
	liked_gifts:  	{ type: Array,      required: false },
	neutral_gifts:  { type: Array,      required: false },
	hated_gifts:  	{ type: Array,      required: false },
}, {
    timestamps: true
})

export default mongoose.model("Person", PersonSchema);