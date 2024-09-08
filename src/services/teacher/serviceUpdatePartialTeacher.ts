import { IServiceResponse, ITeacher } from "../../interfaces";
import modelTeacher from "../../models/modelTeacher";

export const serviceUpdatePartialTeacher = async (id: string, updateData: Partial<ITeacher>): Promise<IServiceResponse<ITeacher>> => {
    try {
        const Teacher: ITeacher | null = await modelTeacher.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!Teacher) {
            return {
                data: null,
                error: `Materia con id: ${id}, no encontrado`,
            }
        }
        return {
            data: Teacher,
            error: null,
        }
    } catch (error: unknown) {
        const errorMessage: string = error instanceof Error ? `Error al intentar actualizar datos de materia ${error.message}` : `Error al intentar actualizar datos de materia ${error}`
        return {
            data: null,
            error: errorMessage,
        }
    }
}