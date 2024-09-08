import { Document } from "mongoose";

export interface IStudent extends Document {
    _id: string;
    name: string;
    registration: boolean;
    age: number;
    __v: number;
}