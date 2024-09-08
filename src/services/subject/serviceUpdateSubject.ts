import { IServiceResponse, ISubject } from "../../interfaces";
import modelSubject from "../../models/modelSubject";

export const serviceUpdateSubject = async (id: string, dataUpdate: ISubject): Promise<IServiceResponse<ISubject>> => {
    try {
        const subject: ISubject | null = await modelSubject.findByIdAndUpdate(id, dataUpdate, { new: true });
        if (!subject) {
            return {
                data: null,
                error: `Materia con id:${id} no encontrado`
            }
        }
        return {
            data: subject,
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