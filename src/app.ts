import { appServer } from "./server/appServer";
import { appDB } from "./config/appDB";

appDB
    .then(() => console.log("Conectado a MongoDB Atlas"))
    .catch((error) => console.error("Mongo DB Atlas, Error: ", error));

const SERVER_PORT: string | number = process.env.PORT || 3000;

appServer.listen(
    3000,
    'localhost',
    () => console.log(`Servidor corriendo en puerto ${SERVER_PORT}`)
);