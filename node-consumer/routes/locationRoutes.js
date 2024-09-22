import express from "express";
import catchAsyncError from "../middlewares/catchAsyncErr.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import fetchLatestDataCtr from "../controllers/fetchLatestDataCtr.js";
import fetchAllSensors from "../controllers/fetchSensors.js";


const locationRoutes = express.Router();

locationRoutes
  .get("/latest", isLoggedIn, catchAsyncError(fetchLatestDataCtr))
  .get("/sensors", isLoggedIn, catchAsyncError(fetchAllSensors))

export default locationRoutes;