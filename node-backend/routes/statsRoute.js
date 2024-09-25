import express from "express";
import ExpressValidator from "express-joi-validation";
import catchAsyncError from "../middlewares/catchAsyncErr.js";
import isLoggedIn from "../middlewares/isLoggedIn.js";
import dailySummaryCtrl from "../controllers/dailySummaryCtrl.js";
import hourlySummaryCtrl from "../controllers/hourlySummaryCtrl.js";
import { sensorSchema } from "../validators/validators.js";


const statsRoutes = express.Router();

const validator = ExpressValidator.createValidator({})

statsRoutes
  .get("/daily/:sensorTag", validator.params(sensorSchema), isLoggedIn, catchAsyncError(dailySummaryCtrl))
  .get("/hourly/:sensorTag",validator.params(sensorSchema), isLoggedIn, catchAsyncError(hourlySummaryCtrl))

export default statsRoutes;