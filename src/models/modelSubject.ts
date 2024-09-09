import mongoose, { Model, Schema } from "mongoose";
import { ISubject } from "../interfaces";


const schemaSubject: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    teachers: [
        {
            teacherId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Teacher",
            },
            students: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Student",
                }
            ]
        }
    ]
});

const modelSubject: Model<ISubject> = mongoose.model<ISubject>("Subject", schemaSubject);

export default modelSubject;