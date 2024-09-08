import { IServiceResponse, IStudent } from "../../interfaces";
import modelStudent from "../../models/modelStudent";

export const serviceDeleteStudent = async (id: string): Promise<IServiceResponse<IStudent>> => {
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