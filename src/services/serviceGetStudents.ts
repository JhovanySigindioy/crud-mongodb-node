import { IServiceResponse } from "../intefaces/IServiceResponse";
import { IStudent } from "../intefaces/IStudent";
import modelStudent from "../models/modelStudent";

export const serviceGetStudents = async (): Promise<IServiceResponse> => {
    try {
        const students: IStudent[] = await modelStudent.find().exec();
        return {
            data: students,
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
