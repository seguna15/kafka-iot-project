import mongoose from "mongoose";

const Schema = mongoose.Schema;
const locationSchema = new Schema({
    slug: {
        type: String,
        required:true
    },
    longitude: {
        type: Number,
        required:true
    },
    latitude: {
        type: Number,
        required:true
    },
    temperature: {
        type: Number,
        required:true
    },
    heartbeat: {
        type: Number,
        required:true
    },
    timestamp: {
        type: Date,
        required:true
    }
});


const Location = mongoose.model("Location", locationSchema);
export default Location;

