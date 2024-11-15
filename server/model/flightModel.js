import mongoose from "mongoose";

const flightSchema = mongoose.Schema({
    airline :{type:String, required:true},
    source :{type:String, required:true},
    destination:{type:String, required:true},
    fare:{type:Number, required:true},
    duration:{type:Number, required:true}
});

export default  mongoose.model("Flight", flightSchema);


