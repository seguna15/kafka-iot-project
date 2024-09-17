import express from "express";
import catchAsyncError from "../middlewares/catchAsyncErr.js";
import registrationCtrl from "../controllers/registrationController.js";
import loginCtrl from "../controllers/loginController.js";

const authRoutes = express.Router();

authRoutes
  .post("/register", catchAsyncError(registrationCtrl))
  .post("/login", catchAsyncError(loginCtrl));

export default authRoutes;