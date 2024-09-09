
import { IServiceResponse, ITeacher } from "../../interfaces";
import modelTeacher from "../../models/modelTeacher";



export const serviceGetTeachers = async (): Promise<IServiceResponse<ITeacher[]>> => {
    try {
        const Teachers: ITeacher[] = await modelTeacher.find().populate("subjects").exec();
        return {
            data: Teachers,
            error: null,
        }
    } catch (error: unknown) {
        const errorMessage: string = error instanceof Error ? `Error al intentar obtener las materias: ${error.message}` : `Error al intentar obtener las materias`
        return {
            data: null,
            error: errorMessage,
        }
    }
}