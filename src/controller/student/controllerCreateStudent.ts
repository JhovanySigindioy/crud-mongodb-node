import { Request, Response } from 'express';
import { serviceCreateStudent } from '../../services/student';

export const controllerCreateStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        const studentData = req.body;
        const { data, error } = await serviceCreateStudent(studentData);
        if (error) {
            res.status(400).json({
                message: "Error al crear al estudiante",
                error,
            });
            return;
        }
        res.status(201).json({
            message: "Estudiante creado con exito",
            student: data,
        });
    } catch (error) {
        console.error('Error creadno estudiante:', error);
        res.status(500).json({
            message: "Fallo inesperado al crear estudiante",
            error,
        });
    }
};
