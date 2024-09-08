import { IServiceResponse, ISubject } from "../../interfaces";
import modelSubject from "../../models/modelSubject";

export const serviceUpdatePartialSubject = async (id: string, updateData: Partial<ISubject>): Promise<IServiceResponse<ISubject>> => {
    try {
        const subject: ISubject | null = await modelSubject.findByIdAndUpdate(id, updateData, { new: true, runValidators: true });
        if (!subject) {
            return {
                data: null,
                error: `Materia con id: ${id}, no encontrado`,
            }
        }
        return {
            data: subject,
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