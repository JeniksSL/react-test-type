import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import PageType from "../../types/PageType";
import {CalculationCaseDto} from "../../types/responces/CalculationCaseDto";
import {IProduct} from "../../types/IProduct";
import {ISubstanceCompact} from "../../types/ISubstanceCompact";
import {useAppSelector} from "../store";
import {NutrientElementType} from "../../components/index/farmers/FertilizersList/NutrientInputElement";
import {useGetRequiredSubstances} from "./substanceSlice";
import {useGetRequiredProducts} from "./fertilizersSlice";
import {CalculationRequestDto} from "../../types/requests/CalculationRequestDto";
import {ProductCompactDto} from "../../types/requests/ProductCompactDto";

interface initialStateProps {
    calculationCases:CalculationCaseDto[]
}

const initialState:initialStateProps = {
    calculationCases: [],
};

const calculationSlice = createSlice({
    initialState,
    name: 'calculationSlice',
    reducers: {
        setCases:(state, action:PayloadAction<CalculationCaseDto[]>) =>{
            state.calculationCases=action.payload;
        }
    }
})

export default calculationSlice.reducer;

export const { setCases } =calculationSlice.actions;

export function useCreateCalculationRequest(){

    const products = useGetRequiredProducts();
    const substances = useGetRequiredSubstances();
    const request:CalculationRequestDto = {
        priceType: "none",
        substances:substances.map(value => {let subCom:ISubstanceCompact={id:value.id, content:value.rate!}; return subCom}),
        products:products.map(value=>{let productCompactDto:ProductCompactDto = {id:value.id, price:value.price}; return productCompactDto})
    }
    return request;
}