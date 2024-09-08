import mongoose, { Model, Schema } from "mongoose";
import { ITeacher } from "../interfaces";


const schemaTeacher: Schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    students: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student"
        }
    ]
});

const modelTeacher: Model<ITeacher> = mongoose.model<ITeacher>("Teacher", schemaTeacher);

export default modelTeacher;