
import { Request, Response } from "express";
import { serviceDeleteStudent } from "../services"

export const controllerDeleteStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data, error } = await serviceDeleteStudent(req.params.id);
        //código de estado adecuado para manejo de errores
        if (error) {
            console.error(error);
            if (error.includes("no encontrado")) {
                res.status(404).json({
                    message: "Estudiante no encontrado",
                    error,
                });
            } else {
                res.status(500).json({
                    message: "Error en el servicio de eliminación",
                    error,
                });
            }
            return;
        }
        //estudiante fue eliminado correctamente
        res.status(204).json({
            message: "Estudiante borrado con éxito",
            data,
        });
    } catch (error) {
        console.error(`Error inesperado al intentar borrar estudiante: ${error}`);
        res.status(500).json({
            message: "Error inesperado al intentar borrar estudiante",
            error,
        });
    }
};