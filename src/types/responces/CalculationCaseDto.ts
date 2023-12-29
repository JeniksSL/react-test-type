import {ISubstanceCompact} from "../ISubstanceCompact";
import {ProductCompactDto} from "../requests/ProductCompactDto";

export interface CalculationCaseDto{
    totalPrice:number;
    substances:ISubstanceCompact[];
    products:ProductCompactDto[]
}