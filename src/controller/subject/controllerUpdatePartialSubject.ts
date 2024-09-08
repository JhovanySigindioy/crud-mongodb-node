import { Request, Response } from "express"
import { serviceUpdatePartialSubject } from "../../services/subject/";

export const controllerUpdatePartialSubject = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data, error } = await serviceUpdatePartialSubject(req.params.id, req.body);
        if (error) {
            if (error.includes("no encontrado")) {
                console.log(error);
                res.status(404).json({
                    message: "Materia no encontrada",
                    error,
                });
            } else {
                console.log(error);
                res.status(500).json({
                    message: "Error en el servicio de actulizacion materia",
                    error,
                });
            }
        }
        res.status(200).json({
            message: "Datos materia actualizados con éxito",
            data,
        });
    } catch (error) {
        console.error(`Error inesperado al intentar actualizar datos de materia: ${error}`);
        res.status(500).json({
            message: "Error inesperado al intentar actualizar datos de materia",
            error,
        });
    }
}