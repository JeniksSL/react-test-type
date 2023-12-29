import {ISubstanceCompact} from "../ISubstanceCompact";

export interface ProductCompactDto{
    id:number;
    price:number;
    rate?:number;
    substanceSet?:ISubstanceCompact[]
}