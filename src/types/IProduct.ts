import {ISubstanceCompact} from "./ISubstanceCompact";

export interface IProduct{
    id: number;
    name: string;
    fullName: string;
    color: string;
    image: string
    isCommon: boolean;
    price: number;
    substanceSet: ISubstanceCompact[]
}