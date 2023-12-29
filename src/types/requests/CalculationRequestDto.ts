import {ISubstanceCompact} from "../ISubstanceCompact";
import {ProductCompactDto} from "./ProductCompactDto";

export interface CalculationRequestDto{
    priceType:string;
    substances: ISubstanceCompact[];
    products: ProductCompactDto[]
}