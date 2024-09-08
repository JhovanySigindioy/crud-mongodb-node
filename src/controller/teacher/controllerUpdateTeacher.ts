import { Request, Response } from "express";
import { serviceUpdateTeacher } from "../../services/teacher";

export const controllerUpdateTeacher = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data, error } = await serviceUpdateTeacher(req.params.id, req.body);
        if (error) {
            if (error.includes("no encontrado")) { }
            res.status(404).json({
                message: "Materia no encontrada",
                error,
            });
            return;
        }
        res.status(200).json({
            message: "Materia actualizada con éxito",
            data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Error en el servicio: Actualizar materia",
            error,
        });
    }
}