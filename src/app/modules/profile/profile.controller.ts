import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { catchAsync } from "../../../utils/catchAsync";
import { AdminProfileService } from "./profile.service";
import { sendResponse } from "../../../utils/sendResponse";


const createProfile = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminProfileService.createProfile(req.body);
    sendResponse(res, {
        statusCode: StatusCodes.CREATED,
        success: true,
        message: "Profile created successfully",
        data: result,
    });
});

const updateProfile = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminProfileService.updateProfile(req.params.profileId, req.body);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Profile updated successfully",
        data: result,
    });
});

const getProfile = catchAsync(async (req: Request, res: Response) => {
    const result = await AdminProfileService.getProfile(req.params.profileId);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Profile fetched successfully",
        data: result,
    });
});

const getAllProfiles = catchAsync(async (req: Request, res: Response) => {
    const page  = Number(req.query.page)  || 1;
    const limit = Number(req.query.limit) || 20;
    const result = await AdminProfileService.getAllProfiles(page, limit);
    sendResponse(res, {
        statusCode: StatusCodes.OK,
        success: true,
        message: "Profiles fetched successfully",
        data: result.profiles,
        meta: result.meta as any,
    });
});

export const AdminProfileController = {
    createProfile,
    updateProfile,
    getProfile,
    getAllProfiles,
};