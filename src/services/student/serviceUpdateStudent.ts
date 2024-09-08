
import { IServiceResponse, IStudent } from "../../interfaces";
import modelStudent from "../../models/modelStudent";

export const serviceUpdateStudent = async (id: string, updateData: IStudent): Promise<IServiceResponse<IStudent>> => {
    try {
        const student: IStudent | null = await modelStudent.findByIdAndUpdate(id, updateData, { new: true });
        if (!student) {
            return {
                data: null,
                error: `Estundiante con id: ${id}, no encontrado`,
            }
        }
        return {
            data: student,
            error: null,
        }
    } catch (error: unknown) {
        const errorMessage: string = error instanceof Error ? `Error al intentar actualizar datos estudiante ${error.message}` : `Error al intentar actualizar datos estudiante`
        return {
            data: null,
            error: errorMessage,
        }
    }
}