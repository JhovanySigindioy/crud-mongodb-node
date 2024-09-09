
import { IServiceResponse, ISubject } from "../../interfaces";
import modelSubject from "../../models/modelSubject";

export const serviceGetSubjects = async (): Promise<IServiceResponse<ISubject[]>> => {
    try {
        const subjects: ISubject[] = await modelSubject
            .find()
            .populate({
                path: "teachers.teacherId", // Para popular los profesores dentro del array de `teachers`
            })
            .populate({
                path: "teachers.students", // Para popular los estudiantes dentro del array de `students`
            })
            .exec();
        return {
            data: subjects,
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