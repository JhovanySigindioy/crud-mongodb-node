import { Request, Response } from "express"
import { serviceUpdateStudent } from "../services"

export const controllerUpdateStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data, error } = await serviceUpdateStudent(req.params.id, req.body);
        if (error) {
            if (error.includes("no encontrado")) {
                console.log(error);
                res.status(404).json({
                    message: "Estudiante no encontrado",
                    error,
                });
            } else {
                console.log(error);
                res.status(500).json({
                    message: "Error en el servicio de actulizacion estudiante",
                    error,
                });
            }
        }
        res.status(200).json({
            message: "Datos estudiante actualizados con éxito",
            data,
        });
    } catch (error) {
        console.error(`Error inesperado al intentar actualizar datos del estudiante: ${error}`);
        res.status(500).json({
            message: "Error inesperado al intentar actualizar datos del estudiante",
            error,
        });
    }
}