import mongoose, { Model, Schema } from "mongoose";
import { ITeacher } from "../interfaces";

const schemaTeacher: Schema = new Schema({
    name: {
        type: String,
        required: true,
    },
    subjects: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject"
        }
    ]
});

const modelTeacher: Model<ITeacher> = mongoose.model<ITeacher>("Teacher", schemaTeacher);

export default modelTeacher;