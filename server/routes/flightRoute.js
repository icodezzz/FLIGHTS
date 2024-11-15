import express from "express";
import {controllerFlight, getAllFlight, getFlight, updateFlight, deleteFlight} from "../controller/flightController.js";
import { getFlightname ,getsourcedest} from "../controller/searchuser.js";

const route = express.Router();

route.post("/create", controllerFlight);
route.get("/getAll", getAllFlight);
route.get("/get/:id", getFlight);
route.put("/update/:id", updateFlight);
route.delete("/delete/:id", deleteFlight);
route.get("/getFlightname/:airline",getFlightname);
route.get("/getflightdetails/:source:destination",getsourcedest);
export default route;