import express from "express";
import catchAsyncError from "../middlewares/catchAsyncErr.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import dailySummaryCtrl from "../controllers/dailySummaryCtrl.js";


const statsRoutes = express.Router();

statsRoutes
  .get("/daily", isLoggedIn, catchAsyncError(dailySummaryCtrl))

export default statsRoutes;