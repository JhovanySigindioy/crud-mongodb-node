import { Document } from "mongoose";

export interface ISubject extends Document {
    _id: string;
    name: string;
    students: string[];
    __V: number;
}