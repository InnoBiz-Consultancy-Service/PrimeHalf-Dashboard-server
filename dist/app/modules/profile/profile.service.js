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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminProfileService = void 0;
const http_status_codes_1 = require("http-status-codes");
const AppError_1 = __importDefault(require("../../../helpers/AppError"));
const profile_model_1 = require("./profile.model");
const createProfile = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield profile_model_1.AdminProfile.create(payload);
    return profile;
});
const updateProfile = (profileId, payload) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield profile_model_1.AdminProfile.findByIdAndUpdate(profileId, payload, { new: true, runValidators: true });
    if (!profile)
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Profile not found");
    return profile;
});
const getProfile = (profileId) => __awaiter(void 0, void 0, void 0, function* () {
    const profile = yield profile_model_1.AdminProfile.findById(profileId)
        .populate("address.divisionId", "name")
        .populate("address.districtId", "name")
        .populate("address.thanaId", "name")
        .lean();
    if (!profile)
        throw new AppError_1.default(http_status_codes_1.StatusCodes.NOT_FOUND, "Profile not found");
    return profile;
});
const getAllProfiles = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (page = 1, limit = 20) {
    const skip = (page - 1) * limit;
    const [profiles, total] = yield Promise.all([
        profile_model_1.AdminProfile.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean(),
        profile_model_1.AdminProfile.countDocuments(),
    ]);
    return {
        profiles,
        meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
});
exports.AdminProfileService = {
    createProfile,
    updateProfile,
    getProfile,
    getAllProfiles,
};
