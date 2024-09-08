import { Router } from "express";
import { controllerCreateTeacher, controllerDeleteTeacher, controllerGetTeachers, controllerUpdatePartialTeacher, controllerUpdateTeacher } from "../controller/teacher";

export const routesTeacher = Router();

routesTeacher
    .post("/teachers", controllerCreateTeacher)
    .get("/teachers", controllerGetTeachers)
    .put("/teachers/:id", controllerUpdateTeacher)
    .patch("/teachers/:id", controllerUpdatePartialTeacher)
    .delete("/teachers/:id", controllerDeleteTeacher)

