"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profile_controller_1 = require("./profile.controller");
const AdminProfileRoutes = (0, express_1.Router)();
// POST /api/v1/profile
AdminProfileRoutes.post("/", profile_controller_1.AdminProfileController.createProfile);
// GET /api/v1/profile
AdminProfileRoutes.get("/", profile_controller_1.AdminProfileController.getAllProfiles);
// GET /api/v1/profile/:profileId
AdminProfileRoutes.get("/:profileId", profile_controller_1.AdminProfileController.getProfile);
// PATCH /api/v1/profile/:profileId
AdminProfileRoutes.patch("/:profileId", profile_controller_1.AdminProfileController.updateProfile);
exports.default = AdminProfileRoutes;
