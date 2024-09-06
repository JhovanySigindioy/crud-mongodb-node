
import { IServiceResponse } from "../intefaces/IServiceResponse";
import { IStudent } from "../intefaces/IStudent";
import modelStudent from "../models/modelStudent";

export const serviceUpdatePartialStudent = async (id: string, updateData: IStudent): Promise<IServiceResponse> => {
    try {
        const student: IStudent | null = await modelStudent.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
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