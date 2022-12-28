import mongoose from "mongoose"

export const animalsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    }
})
 
mongoose.model("Animals", animalsSchema)