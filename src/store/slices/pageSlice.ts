import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import PageType from "../../types/PageType";

const initialState = {
    currentPage: PageType.MAIN,
};

const pageSlice = createSlice({
    initialState,
    name: 'pageSlice',
    reducers: {
        setPage:(state, action:PayloadAction<PageType>) =>{
            state.currentPage=action.payload;
        }
    }
})

export default pageSlice.reducer;

export const {  setPage } = pageSlice.actions;
