export interface ProductSearchRequest{
    page?:number;
    size?:number;
    name?:string;
    description?:string;
    substances?: number[];
    isCommon?: boolean;
}

