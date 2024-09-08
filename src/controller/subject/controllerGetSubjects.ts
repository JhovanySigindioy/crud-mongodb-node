import { Request, Response } from "express";
import { serviceGetSubjects } from "../../services/subject"

export const controllerGetSubjects = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data, error } = await serviceGetSubjects();
        if (error) {
            res.status(400).json({
                message: "Error al obtener los datos",
                error,
            });
            return;
        }

        res.status(200).json({
            message: "Materias obtenidas con éxito",
            data,
        });


    } catch (error) {
        res.status(500).json({
            message: "Error en el servicio: Obtener materias",
            error,
        });
    }
}