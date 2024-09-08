
import { Request, Response } from "express";
import { serviceDeleteSubject } from "../../services/subject";

export const controllerDeleteSubject = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data, error } = await serviceDeleteSubject(req.params.id);
        //código de estado adecuado para manejo de errores
        if (error) {
            console.error(error);
            if (error.includes("no encontrado")) {
                res.status(404).json({
                    message: "Materia no encontrado",
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
        //Materia fue eliminado correctamente
        res.status(204).json({
            message: "Materia borrado con éxito",
            data,
        });
    } catch (error) {
        console.error(`Error inesperado al intentar borrar Materia: ${error}`);
        res.status(500).json({
            message: "Error inesperado al intentar borrar Materia",
            error,
        });
    }
};