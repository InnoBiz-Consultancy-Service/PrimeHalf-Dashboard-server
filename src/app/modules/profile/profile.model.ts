import { Schema, model } from "mongoose";
import {
  GuardianRelation,
  Personality,
  EconomicalStatus,
  Habits,
  SiblingPosition,
  ResidencyStatus,
  AfterMarriageJobForFemale,
  IsJobAllowedForWife,
} from "../profile/profile.interface";

const addressSchema = new Schema(
  {
    divisionId: { type: Schema.Types.ObjectId, ref: "Division", required: [true, "Division is required"] },
    districtId: { type: Schema.Types.ObjectId, ref: "District", required: [true, "District is required"] },
    thanaId:    { type: Schema.Types.ObjectId, ref: "Thana" },
    details:    { type: String },
  },
  { _id: false }
);

const siblingSchema = new Schema(
  {
    name:       { type: String, required: true, trim: true },
    position:   { type: String, enum: Object.values(SiblingPosition), required: true },
    profession: { type: String, trim: true },
    isMarried:  { type: Boolean, default: false },
  },
  { _id: true }
);

const educationSchema = new Schema(
  {
    graduation: {
      variety:      { type: String, enum: ["SSC", "HSC", "Diploma", "Bachelor", "Masters", "Engineering", "Medical", "PhD", "Other"], required: [true, "Education variety is required"] },
      department:   { type: String },
      institution:  { type: String },
      passingYear:  { type: String },
      universityId: { type: Schema.Types.ObjectId, ref: "University" },
      collegeName:  { type: String },
    },
  },
  { _id: false }
);

const religionSchema = new Schema(
  {
    faith:                     { type: String, enum: ["Islam", "Hinduism", "Buddhism", "Christianity", "Other"], required: [true, "Faith is required"] },
    sectOrCaste:               { type: String },
    practiceLevel:             { type: String, enum: ["Practicing", "Regular", "Occasional", "Not Practicing"], required: [true, "Practice level is required"] },
    dailyLifeStyleSummary:     { type: String },
    religiousLifestyleDetails: { type: String },
  },
  { _id: false }
);

const adminProfileSchema = new Schema(
  {
    // ─── REQUIRED ─────────────────────────────────────────────────────────────
    birthDate:        { type: Date,   required: [true, "Birth date is required"] },
    maritalStatus:    { type: String, enum: ["Single", "Divorced", "Widowed"], required: [true, "Marital status is required"] },
    relation:         { type: String, enum: Object.values(GuardianRelation), required: [true, "Guardian relation is required"] },
    fatherOccupation: { type: String, required: [true, "Father's occupation is required"] },
    motherOccupation: { type: String, required: [true, "Mother's occupation is required"] },
    address:          { type: addressSchema, required: [true, "Address is required"] },
    education:        { type: educationSchema, required: [true, "Education is required"] },
    religion:         { type: religionSchema, required: [true, "Religion info is required"] },
    profession:       { type: String, required: [true, "Profession is required"] },
    economicalStatus: { type: String, enum: Object.values(EconomicalStatus), required: [true, "Economical status is required"] },
    personality:      { type: String, enum: Object.values(Personality), required: [true, "Personality is required"] },
    habits: {
      type: [String],
      enum: Object.values(Habits),
      required: [true, "Habits are required"],
      validate: { validator: (v: string[]) => v && v.length > 0, message: "At least one habit is required" },
    },
    nationality:      { type: String, required: [true, "Nationality is required"] },
    residencyStatus:  { type: String, enum: Object.values(ResidencyStatus), required: [true, "Residency status is required"] },

    // ─── OPTIONAL ─────────────────────────────────────────────────────────────
    image:      { type: String, default: null },
    coverImage: { type: String, default: null },
    aboutMe:    { type: String },
    height:     { type: String },
    weight:     { type: Number },
    skinTone:   { type: String },
    salaryRange:{ type: String },
    siblings:   { type: [siblingSchema], default: [] },
    afterMarriageJobForFemale: { type: String, enum: Object.values(AfterMarriageJobForFemale), default: null },
    isJobAllowedForWife:       { type: String, enum: Object.values(IsJobAllowedForWife), default: null },
  },
  { timestamps: true }
);

export const AdminProfile = model("AdminProfile", adminProfileSchema);