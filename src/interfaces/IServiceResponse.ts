export interface IServiceResponse<T> {
    data: T | null;
    error: string | null;
}