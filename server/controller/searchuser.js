import Flight from "../model/flightModel.js";

export const getFlightname = async(req, res)=>{
    try{
        const airline = req.params.airline;
        const flightdat = await Flight.find({airline : airline });
        if(!flightdat){
            return res.status(400).json({msg:"Flights data are empty"});
        }
        res.status(200).json(flightdat);
    }catch(error){
        res.status(500).json({error : error.message});
    }
}
export const getsourcedest = async(req, res)=>{
    try{
        const source = req.params.source;
        const destination= req.params.destination;
        const flightdat = await Flight.find({source : source },{destination:destination});
        if(!flightdat){
            return res.status(400).json({msg:"Flights data are empty"});
        }
        res.status(200).json(flightdat);
    }catch(error){
        res.status(500).json({error : error.message});
    }
}
