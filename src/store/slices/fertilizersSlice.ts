
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {useAppSelector} from "../store";
import {IProduct} from "../../types/IProduct";

interface initialStateProps {
    allProducts: Map<number, IProduct>,
    requiredProducts: Set<number>,
    newProduct: IProduct|null
}

const initialState:initialStateProps = {
    allProducts: new Map<number, IProduct>(),
    requiredProducts:new Set<number>(),
    newProduct:null
};

const fertilizersSlice = createSlice({
    initialState,
    name: 'fertilizerSlice',
    reducers: {
        putAll: (state, action: PayloadAction<IProduct[]>) => {
            action.payload.forEach((el) => state.allProducts.set(el.id, el))
        },
        putIntoRequired: (state, action: PayloadAction<number>) => {
            if (state.allProducts.has(action.payload)) state.requiredProducts.add(action.payload);
        },
        removeFromRequired: (state, action: PayloadAction<number>) => {
            state.requiredProducts.delete(action.payload)
        },
        editPrice: (state, action: PayloadAction<IProduct>) => {
            let required = state.allProducts.get(action.payload.id)
            if (required) required.price = action.payload.price
        },
        createNew:(state, action: PayloadAction<IProduct>) => {
            state.newProduct=action.payload
        }
    }
})

export default fertilizersSlice.reducer;

export const {
    putAll,
    putIntoRequired,
    removeFromRequired,
    editPrice
} = fertilizersSlice.actions;


export function useGetRequiredProducts(){
    let selector = useAppSelector((state) => state.fertilizersState)
    let ids = Array.from(selector.requiredProducts)
    let data:IProduct [] = [];
    ids.forEach((id)=>{
        let iSub= selector.allProducts.get(id)
        if (iSub) data.push(iSub)
    })
    return data;
}