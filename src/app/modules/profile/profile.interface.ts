// profile.interface.ts
import { Types } from "mongoose";

export enum Gender {
    MALE = "male",
    FEMALE = "female",
}

export enum GuardianRelation {
    FATHER = "father",
    MOTHER = "mother",
    BROTHER = "brother",
    SISTER = "sister",
    UNCLE = "uncle",
    AUNT = "aunt",
    GUARDIAN = "guardian",
}

export enum Personality {
    CARING_SOUL = "Caring Soul",
    BALANCED_THINKER = "Balanced Thinker",
    AMBITIOUS_MIND = "Ambitious Mind",
}

export enum EconomicalStatus {
    LOW = "Low",
    HIGH = "High",
    MIDDLE= "Middle",
    UPPER_MIDDLE = "Upper-Middle",
}

export enum SiblingPosition {
    FIRST = "first",
    SECOND = "second",
    THIRD = "third",
    FOURTH = "fourth",
    FIFTH = "fifth",
    SIXTH = "sixth",
    SEVENTH = "seventh",
    EIGHTH = "eighth",
    NINTH = "ninth",
    TENTH = "tenth",
    OTHER = "other"
}

export interface QueryParams {
    search?: string;
    university?: string;
    division?: string;
    district?: string;
    thana?: string;
    gender?: string;
    address?: string;
    page?: number;
    limit?: number;
    sort?: string;
    country?: string; 
}

export enum ResidencyStatus {
    CITIZEN = "citizen",
    PROBASHI = "probashi",
}
export enum AfterMarriageJobForFemale {
    YES = "yes",
    NO = "no",
    DEPENDS_ON_SITUATION = "depends_on_situation",
}

export enum IsJobAllowedForWife {
    YES = "yes",
    NO = "no",
    DEPENDS_ON_SITUATION = "depends_on_situation",
}
export enum Habits {
    READING_BOOKS = "Reading Books",
    TRAVELING = "Traveling",
    COOKING = "Cooking",
    SPORTS = "Sports",
    GYM_FITNESS = "Gym/Fitness",
    WATCHING_MOVIES = "Watching Movies",
    LISTENING_TO_MUSIC = "Listening to Music",
    PHOTOGRAPHY = "Photography",
    GARDENING = "Gardening",
    GAMING = "Gaming",
    WRITING = "Writing",
    ART_AND_CRAFT = "Art & Craft",
    SOCIAL_WORK = "Social Work",
    ENTREPRENEURSHIP = "Entrepreneurship",
    TECHNOLOGY = "Technology",
    OTHERS = "others",
    MUSIC = "Music",
}

// ─── Sibling Interface (New) ─────────────────────────
export interface ISibling {
    name: string;
    position: SiblingPosition;
    profession?: string;
    isMarried?: boolean;
}

// ─── Address Interface ───────────────────────────────
export interface IAddress {
    divisionId: Types.ObjectId;
    districtId: Types.ObjectId;
    thanaId?: Types.ObjectId;
    details?: string;
}

// ─── Education Interface ─────────────────────────────
export interface IEducation {
    graduation: {
        variety: string;
        department?: string;
        institution?: string;
        passingYear?: string;
        universityId?: Types.ObjectId;
        collegeName?: string;
    };
}

// ─── Religion Interface ──────────────────────────────
export interface IReligion {
    faith: string;
    sectOrCaste?: string;
    practiceLevel: string;
    dailyLifeStyleSummary?: string;
    religiousLifestyleDetails?: string;
}

// ─── Main Profile Interface (Modified) ───────────────
export interface IProfile {
    userId: Types.ObjectId;
    coverImage?: string;          
    siblings?: ISibling[];        
    birthDate?: Date;
    relation?: GuardianRelation;
    fatherOccupation?: string;
    motherOccupation?: string;
    maritalStatus?: string;
    address: IAddress;
    education: IEducation;
    religion?: IReligion;
    aboutMe?: string;
    height?: string;
    weight?: number;
    skinTone?: string;
    profession: string;
    salaryRange?: string;
    economicalStatus: EconomicalStatus;
    personality: Personality;
    habits: Habits[];
    nationality?: string;
    residencyStatus?: ResidencyStatus;
    image?: string;
     afterMarriageJobForFemale?: AfterMarriageJobForFemale;
        isJobAllowedForWife?: IsJobAllowedForWife;
    createdAt?: Date;
    updatedAt?: Date;
}

// ─── Profile Visit Interface (Keep as is) ─────────────
export interface IProfileVisit extends Document {
    _id: Types.ObjectId;
    visitorId: Types.ObjectId;
    profileOwnerId: Types.ObjectId;
    visitCount: number;
    visitedAt: Date;
    createdAt: Date;
    updatedAt: Date;
}