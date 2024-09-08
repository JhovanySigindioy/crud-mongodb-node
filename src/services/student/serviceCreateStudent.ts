import { IServiceResponse, IStudent } from "../../interfaces";
import modelStudent from "../../models/modelStudent";

export const serviceCreateStudent = async (studentData: IStudent): Promise<IServiceResponse<IStudent>> => {
    try {
        const student = new modelStudent(studentData);
        const savedStudent = await student.save();
        return {
            data: savedStudent,
            error: null
        };
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? `Error inesperado: ${error.message}` : `Error inesperado: ${error}`
        return {
            data: null,
            error: errorMessage,
        };
    }
};
