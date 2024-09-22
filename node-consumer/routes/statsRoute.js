import express from "express";
import catchAsyncError from "../middlewares/catchAsyncErr.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import dailySummaryCtrl from "../controllers/dailySummaryCtrl.js";
import hourlySummaryCtrl from "../controllers/hourlySummaryCtrl.js";


const statsRoutes = express.Router();

statsRoutes
  .get("/daily/:sensorTag", isLoggedIn, catchAsyncError(dailySummaryCtrl))
  .get("/hourly/:sensorTag", isLoggedIn, catchAsyncError(hourlySummaryCtrl))

export default statsRoutes;