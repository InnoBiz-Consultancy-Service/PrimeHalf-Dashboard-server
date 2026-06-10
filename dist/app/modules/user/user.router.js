"use strict";
// Add Here Router Code
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserRoutes = (0, express_1.Router)();
UserRoutes.get("/", (req, res) => {
    res.send("All users list");
});
exports.default = UserRoutes;
