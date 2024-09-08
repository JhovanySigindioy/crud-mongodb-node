import { Document } from "mongoose";

export interface ITeacher extends Document {
    _id: string;
    name: string;
    subjects: string[];
    __V: number;
}