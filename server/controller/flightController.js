import Flight from "../model/flightModel.js";

export const controllerFlight = async(req, res)=>{
    try{
        const flightData = Flight(req.body)
        if(!flightData){
            return res.status(400).json({msg:"Flights data are empty"});
        }
        await flightData.save();
        res.status(200).json({msg: "Successfully created Flight"});
    }catch(error){
        res.status(500).json({error : error.message});
    }
}


export const getAllFlight = async(req, res)=>{
    try{
        const flightdat = await Flight.find();
        if(!flightdat){
            return res.status(400).json({msg:"Flights data are empty"});
        }
        res.status(200).json(flightdat);
    }catch(error){
        res.status(500).json({error : error.message});
    }
}

export const getFlight = async(req, res)=>{
    try{
        const id = req.params.id;
        const flightdat = await Flight.findById(id);
        if(!flightdat){
            return res.status(400).json({msg:"Flights data are empty"});
        }
        res.status(200).json(flightdat);
    }catch(error){
        res.status(500).json({error : error.message});
    }
}

export const updateFlight = async(req, res)=>{
    try{
        const id = req.params.id;
        const flightdat = await Flight.findById(id);
        if(!flightdat){
            return res.status(400).json({msg:"Flights data are empty"});
        }
        const updateData = await Flight.findByIdAndUpdate(id, req.body, {new:true});
        res.status(200).json(updateData);
    }catch(error){
        res.status(500).json({error : error.message});
    }
}

export const deleteFlight = async (req, res) => {
    try {
        const id = req.params.id;
        const flightdat = await Flight.findById(id);
        
        if (!flightdat) {
            return res.status(400).json({ msg: "Flight data not found" });
        }
        
        await Flight.findByIdAndDelete(id);
        res.status(200).json({ msg: "Flight deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};