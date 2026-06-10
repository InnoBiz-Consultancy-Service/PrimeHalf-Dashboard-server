"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProfileController = void 0;
const http_status_codes_1 = require("http-status-codes");
const catchAsync_1 = require("../../../utils/catchAsync");
const profile_service_1 = require("./profile.service");
const sendResponse_1 = require("../../../utils/sendResponse");
const createProfile = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield profile_service_1.AdminProfileService.createProfile(req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.CREATED,
        success: true,
        message: "Profile created successfully",
        data: result,
    });
}));
const updateProfile = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield profile_service_1.AdminProfileService.updateProfile(req.params.profileId, req.body);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Profile updated successfully",
        data: result,
    });
}));
const getProfile = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield profile_service_1.AdminProfileService.getProfile(req.params.profileId);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Profile fetched successfully",
        data: result,
    });
}));
const getAllProfiles = (0, catchAsync_1.catchAsync)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 20;
    const result = yield profile_service_1.AdminProfileService.getAllProfiles(page, limit);
    (0, sendResponse_1.sendResponse)(res, {
        statusCode: http_status_codes_1.StatusCodes.OK,
        success: true,
        message: "Profiles fetched successfully",
        data: result.profiles,
        meta: result.meta,
    });
}));
exports.AdminProfileController = {
    createProfile,
    updateProfile,
    getProfile,
    getAllProfiles,
};
