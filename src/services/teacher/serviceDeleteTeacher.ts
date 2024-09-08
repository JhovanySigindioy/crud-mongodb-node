import { IServiceResponse, ITeacher } from "../../interfaces";
import modelTeacher from "../../models/modelTeacher";

export const serviceDeleteTeacher = async (id: string): Promise<IServiceResponse<ITeacher>> => {
    try {
        const Teacher: ITeacher | null = await modelTeacher.findByIdAndDelete(id);

        if (!Teacher) {
            return {
                data: null,
                error: `Estudiante con id ${id} no encontrado`,
            };
        }
        return {
            data: Teacher,
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