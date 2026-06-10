import { StatusCodes } from "http-status-codes";
import AppError from "../../../helpers/AppError";
import { AdminProfile } from "./profile.model";


const createProfile = async (payload: any) => {
    const profile = await AdminProfile.create(payload);
    return profile;
};

const updateProfile = async (profileId: string, payload: any) => {
    const profile = await AdminProfile.findByIdAndUpdate(
        profileId,
        payload,
        { new: true, runValidators: true }
    );
    if (!profile) throw new AppError(StatusCodes.NOT_FOUND, "Profile not found");
    return profile;
};

const getProfile = async (profileId: string) => {
    const profile = await AdminProfile.findById(profileId)
        .populate("address.divisionId",  "name")
        .populate("address.districtId",  "name")
        .populate("address.thanaId",     "name")
        .lean();
    if (!profile) throw new AppError(StatusCodes.NOT_FOUND, "Profile not found");
    return profile;
};

const getAllProfiles = async (page = 1, limit = 20) => {
    const skip = (page - 1) * limit;
    const [profiles, total] = await Promise.all([
        AdminProfile.find()
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(limit)
            .lean(),
        AdminProfile.countDocuments(),
    ]);
    return {
        profiles,
        meta: { total, page, limit, totalPages: Math.ceil(total / limit) },
    };
};

export const AdminProfileService = {
    createProfile,
    updateProfile,
    getProfile,
    getAllProfiles,
};