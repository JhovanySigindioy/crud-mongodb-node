import { Request, Response } from "express";
import { serviceCreateSubject } from "../../services/subject";


export const controllerCreateSubject = async (req: Request, res: Response): Promise<void> => {
    try {
        const { data, error } = await serviceCreateSubject(req.body);
        if (error) {
            console.log(error);
            res.status(400).json({
                message: "Fallo la creacion de la materia",
                error,
            });
            return;
        }
        console.log("Materia creada con éxito");
        res.status(201).json({
            message: "Materia creada con éxito",
            data,
        });
    } catch (error) {
        console.log("Fallo el servicio: crear materia", error);
        res.status(500).json({
            message: "Fallo el servicio: crear materia",
            error,
        });
    }
}