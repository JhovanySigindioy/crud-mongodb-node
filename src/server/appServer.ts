import express, { Application } from "express";
import morgan from "morgan";
import { routesStudent, routesSubject} from "../appRouter";

export const appServer: Application = express();

//middlewares 
appServer.use(morgan('dev'));
appServer.use(express.json());
appServer.use("/api", routesStudent);
appServer.use("/api", routesSubject);


