import express from "express";
import catchAsyncError from "../middlewares/catchAsyncErr.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import fetchLatestDataCtr from "../controllers/fetchLatestDataCtr.js";


const locationRoutes = express.Router();

locationRoutes
  .get("/latest", isLoggedIn, catchAsyncError(fetchLatestDataCtr))

export default locationRoutes;