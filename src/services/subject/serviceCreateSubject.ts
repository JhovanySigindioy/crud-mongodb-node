import { IServiceResponse, ISubject } from "../../interfaces";
import modelSubject from "../../models/modelSubject";

export const serviceCreateSubject = async (subjectData: ISubject): Promise<IServiceResponse<ISubject>> => {
    try {
        const subject: ISubject = await modelSubject.create(subjectData);
        return {
            data: subject,
            error: null,
        }
    } catch (error: unknown) {
        const errorMessage: string = error instanceof Error ? `Error al intentar crear la materia: ${error.message}` : `Error al intentar crear la materia`
        return {
            data: null,
            error: errorMessage,
        }
    }
}