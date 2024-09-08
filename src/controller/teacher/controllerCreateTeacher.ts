import { Request, Response } from "express";
import { serviceCreateTeacher } from "../../services/teacher";



export const controllerCreateTeacher = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data, error } = await serviceCreateTeacher(req.body);
        if (error) {
            console.log(error);
            res.status(400).json({
                message: "Fallo la creacion del profesor",
                error,
            });
            return;
        }
        console.log("Profesor creada con éxito");
        res.status(201).json({
            message: "Profesor creada con éxito",
            data,
        });
    } catch (error) {
        console.log("Fallo el servicio: crear Profesor", error);
        res.status(500).json({
            message: "Fallo el servicio: crear Profesor",
            error,
        });
    }
}