import { Router } from "express";
import { AdminProfileController } from "./profile.controller";


const AdminProfileRoutes = Router();

// POST /api/v1/profile
AdminProfileRoutes.post("/",AdminProfileController.createProfile);

// GET /api/v1/profile
AdminProfileRoutes.get("/",AdminProfileController.getAllProfiles);

// GET /api/v1/profile/:profileId
AdminProfileRoutes.get("/:profileId",AdminProfileController.getProfile);

// PATCH /api/v1/profile/:profileId
AdminProfileRoutes.patch("/:profileId",AdminProfileController.updateProfile);

export default AdminProfileRoutes;