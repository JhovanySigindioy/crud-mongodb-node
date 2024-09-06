import { IServiceResponse } from "../intefaces/IServiceResponse";
import { IStudent } from "../intefaces/IStudent";
import modelStudent from "../models/modelStudent";

export const serviceCreateStudent = async (studentData: Partial<IStudent>): Promise<IServiceResponse> => {
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
