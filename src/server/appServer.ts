import express, { Application } from "express";
import morgan from "morgan";
import { appRouter } from "../appRouter/routes";

export const appServer: Application = express();

//middlewares 
appServer.use(morgan('dev'));
appServer.use(express.json());
appServer.use("/api", appRouter);


