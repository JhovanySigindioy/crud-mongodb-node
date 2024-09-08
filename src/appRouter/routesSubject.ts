import { Router } from "express";
import { controllerCreateSubject, controllerDeleteSubject, controllerGetSubjects, controllerUpdatePartialSubject, controllerUpdateSubject } from "../controller/subject";



export const routesSubject = Router();

routesSubject
    .post("/subjects", controllerCreateSubject)
    .get("/subjects", controllerGetSubjects)
    .put("/subjects/:id", controllerUpdateSubject)
    .patch("/subjects/:id", controllerUpdatePartialSubject)
    .delete("/subjects/:id", controllerDeleteSubject)

