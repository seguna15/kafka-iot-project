import mongoose, {Schema} from "mongoose";

const animalSchema = new Schema({
    animalTag: {
        type: String,
        required: true,
    },
    sensorNumber: {
        type: String,
        ref: "Sensor"
    },
    isMonitored: {
        type: Boolean,
        required: true,
        default: true,
    },
    age: {
       type: Number,
       required: true, 
    },
    weight: {
        type: Number,
        required: true,
    },
    height: {
        type: Number,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
}, {timestamps: true});


const Animal = mongoose.model("Animal", animalSchema);
export default Animal;