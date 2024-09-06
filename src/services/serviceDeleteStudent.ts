
import { IServiceResponse } from "../intefaces/IServiceResponse";
import modelStudent from "../models/modelStudent";
import { IStudent } from "../intefaces/IStudent";

export const serviceDeleteStudent = async (id: string): Promise<IServiceResponse> => {
    try {
        const student: IStudent | null = await modelStudent.findByIdAndDelete(id);

        if (!student) {
            return {
                data: null,
                error: `Estudiante con id ${id} no encontrado`,
            };
        }

        return {
            data: student,
            error: null,
        };
    } catch (error: unknown) {
        const errorMessage: string = error instanceof Error ? `Error al intentar borrar estudiante: ${error.message}` : `Error al intentar borrar estudiante`;
        return {
            data: null,
            error: errorMessage,
        };
    }
};