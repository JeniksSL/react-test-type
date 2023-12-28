export interface PageDto<T> {
    objects:T[];
    totalPages:number;
    totalElements:number
}