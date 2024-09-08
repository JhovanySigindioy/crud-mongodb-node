import { IServiceResponse, ITeacher } from "../../interfaces";
import modelTeacher from "../../models/modelTeacher";

export const serviceUpdateTeacher = async (id: string, dataUpdate: ITeacher): Promise<IServiceResponse<ITeacher>> => {
    try {
        const Teacher: ITeacher | null = await modelTeacher.findByIdAndUpdate(id, dataUpdate, { new: true });
        if (!Teacher) {
            return {
                data: null,
                error: `Materia con id:${id} no encontrado`
            }
        }
        return {
            data: Teacher,
            error: null,
        }
    } catch (error: unknown) {
        const errorMessage: string = error instanceof Error ? `Error al intentar obtener las materias: ${error.message}` : `Error al intentar obtener las materias: ${error}`
        return {
            data: null,
            error: errorMessage,
        }
    }
}