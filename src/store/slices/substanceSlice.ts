
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ISubstance} from "../../types/ISubstance";
import {useAppSelector} from "../store";
import {ISubstanceCompact} from "../../types/ISubstanceCompact";
import {NutrientElementType} from "../../components/index/farmers/FertilizersList/NutrientInputElement";

interface initialStateProps {
    allSubstances: Map<number, ISubstance>,
    requiredSubstances: Set<number>
}

const initialState:initialStateProps = {
    allSubstances: new Map<number, ISubstance>(),
    requiredSubstances:new Set<number>()

};

const substanceSlice = createSlice({
    initialState,
    name: 'substanceSlice',
    reducers: {
        putAll: (state, action: PayloadAction<ISubstance[]>) => {
            action.payload.forEach((el) => state.allSubstances.set(el.id, el))
        },
        putIntoRequired: (state, action: PayloadAction<number>) => {
            if (state.allSubstances.has(action.payload)) state.requiredSubstances.add(action.payload);
            console.log(state.requiredSubstances)
        },
        removeFromRequired: (state, action: PayloadAction<number>) => {
            state.requiredSubstances.delete(action.payload)
        },
        editRate: (state, action: PayloadAction<ISubstance>) => {
            let required = state.allSubstances.get(action.payload.id)
            if (required) required.rate = action.payload.rate
        }
    }
})

export default substanceSlice.reducer;

export const {
    putAll,
    putIntoRequired,
    removeFromRequired,
    editRate
} = substanceSlice.actions;


export function useGetRequiredSubstances(){
    let selector = useAppSelector((state) => state.substanceState)
    let ids = Array.from(selector.requiredSubstances)
    let data:ISubstance [] = [];
    ids.forEach((id)=>{
        let iSub= selector.allSubstances.get(id)
        if (iSub) data.push(iSub)
    })
    return data;
}
export function useGetAllNutrientInputs(availableSubstances:ISubstanceCompact[]){
    let contentMap = new Map<number,number>();
    availableSubstances.forEach((sub)=>contentMap.set(sub.id, sub.content))
    let selector = useAppSelector((state) => state.substanceState)
    let allSubstances = selector.allSubstances
    let data:NutrientElementType [] = [];
    allSubstances.forEach((element)=>{
        let subContent = contentMap.get(element.id)
        subContent= subContent?subContent:0
        data.push({id:element.id, content:subContent, name:element.name, color:element.color}
           )
    })
    return data;
}
