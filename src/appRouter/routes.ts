import { Router } from "express";
import { controllerCreateStudent, controllerDeleteStudent, controllerGetStudents, controllerUpdateStudent, controllerUpdatePartialStudent } from "../controller";

export const appRouter = Router();

appRouter
    .post("/students", controllerCreateStudent)
    .get("/students", controllerGetStudents)
    .put("/students/:id", controllerUpdateStudent)
    .patch("/students/:id", controllerUpdatePartialStudent)
    .delete("/students/:id", controllerDeleteStudent)