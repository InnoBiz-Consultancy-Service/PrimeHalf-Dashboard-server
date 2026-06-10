"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Habits = exports.IsJobAllowedForWife = exports.AfterMarriageJobForFemale = exports.ResidencyStatus = exports.SiblingPosition = exports.EconomicalStatus = exports.Personality = exports.GuardianRelation = exports.Gender = void 0;
var Gender;
(function (Gender) {
    Gender["MALE"] = "male";
    Gender["FEMALE"] = "female";
})(Gender || (exports.Gender = Gender = {}));
var GuardianRelation;
(function (GuardianRelation) {
    GuardianRelation["FATHER"] = "father";
    GuardianRelation["MOTHER"] = "mother";
    GuardianRelation["BROTHER"] = "brother";
    GuardianRelation["SISTER"] = "sister";
    GuardianRelation["UNCLE"] = "uncle";
    GuardianRelation["AUNT"] = "aunt";
    GuardianRelation["GUARDIAN"] = "guardian";
})(GuardianRelation || (exports.GuardianRelation = GuardianRelation = {}));
var Personality;
(function (Personality) {
    Personality["CARING_SOUL"] = "Caring Soul";
    Personality["BALANCED_THINKER"] = "Balanced Thinker";
    Personality["AMBITIOUS_MIND"] = "Ambitious Mind";
})(Personality || (exports.Personality = Personality = {}));
var EconomicalStatus;
(function (EconomicalStatus) {
    EconomicalStatus["LOW"] = "Low";
    EconomicalStatus["HIGH"] = "High";
    EconomicalStatus["MIDDLE"] = "Middle";
    EconomicalStatus["UPPER_MIDDLE"] = "Upper-Middle";
})(EconomicalStatus || (exports.EconomicalStatus = EconomicalStatus = {}));
var SiblingPosition;
(function (SiblingPosition) {
    SiblingPosition["FIRST"] = "first";
    SiblingPosition["SECOND"] = "second";
    SiblingPosition["THIRD"] = "third";
    SiblingPosition["FOURTH"] = "fourth";
    SiblingPosition["FIFTH"] = "fifth";
    SiblingPosition["SIXTH"] = "sixth";
    SiblingPosition["SEVENTH"] = "seventh";
    SiblingPosition["EIGHTH"] = "eighth";
    SiblingPosition["NINTH"] = "ninth";
    SiblingPosition["TENTH"] = "tenth";
    SiblingPosition["OTHER"] = "other";
})(SiblingPosition || (exports.SiblingPosition = SiblingPosition = {}));
var ResidencyStatus;
(function (ResidencyStatus) {
    ResidencyStatus["CITIZEN"] = "citizen";
    ResidencyStatus["PROBASHI"] = "probashi";
})(ResidencyStatus || (exports.ResidencyStatus = ResidencyStatus = {}));
var AfterMarriageJobForFemale;
(function (AfterMarriageJobForFemale) {
    AfterMarriageJobForFemale["YES"] = "yes";
    AfterMarriageJobForFemale["NO"] = "no";
    AfterMarriageJobForFemale["DEPENDS_ON_SITUATION"] = "depends_on_situation";
})(AfterMarriageJobForFemale || (exports.AfterMarriageJobForFemale = AfterMarriageJobForFemale = {}));
var IsJobAllowedForWife;
(function (IsJobAllowedForWife) {
    IsJobAllowedForWife["YES"] = "yes";
    IsJobAllowedForWife["NO"] = "no";
    IsJobAllowedForWife["DEPENDS_ON_SITUATION"] = "depends_on_situation";
})(IsJobAllowedForWife || (exports.IsJobAllowedForWife = IsJobAllowedForWife = {}));
var Habits;
(function (Habits) {
    Habits["READING_BOOKS"] = "Reading Books";
    Habits["TRAVELING"] = "Traveling";
    Habits["COOKING"] = "Cooking";
    Habits["SPORTS"] = "Sports";
    Habits["GYM_FITNESS"] = "Gym/Fitness";
    Habits["WATCHING_MOVIES"] = "Watching Movies";
    Habits["LISTENING_TO_MUSIC"] = "Listening to Music";
    Habits["PHOTOGRAPHY"] = "Photography";
    Habits["GARDENING"] = "Gardening";
    Habits["GAMING"] = "Gaming";
    Habits["WRITING"] = "Writing";
    Habits["ART_AND_CRAFT"] = "Art & Craft";
    Habits["SOCIAL_WORK"] = "Social Work";
    Habits["ENTREPRENEURSHIP"] = "Entrepreneurship";
    Habits["TECHNOLOGY"] = "Technology";
    Habits["OTHERS"] = "others";
    Habits["MUSIC"] = "Music";
})(Habits || (exports.Habits = Habits = {}));
