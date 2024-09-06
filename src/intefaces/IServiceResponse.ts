import { IStudent } from "./IStudent";

export interface IServiceResponse {
    data: IStudent | IStudent[] | null;
    error: string | null;
}