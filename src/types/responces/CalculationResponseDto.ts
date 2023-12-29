import {CalculationCaseDto} from "./CalculationCaseDto";

export interface CalculationResponseDto{
    id:number;
    priceType:string;
    cases:CalculationCaseDto[]
}