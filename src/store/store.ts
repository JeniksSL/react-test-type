import { configureStore } from '@reduxjs/toolkit';
import pageReducer from './slices/pageSlice';
import substanceReducer from './slices/substanceSlice';
import fertilizersReducer from './slices/fertilizersSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import {substanceApi} from "../api/substanceApi/substanceApi";
import {fertilizersApi} from "./api/fertilizersApi";
import {calculationApi} from "./api/calculationApi";
import {userApi} from "./api/userApi";

export const store = configureStore({
    reducer:{
        [substanceApi.reducerPath]:substanceApi.reducer,
        [fertilizersApi.reducerPath]: fertilizersApi.reducer,
        [calculationApi.reducerPath]:calculationApi.reducer,
        [userApi.reducerPath]:userApi.reducer,
        pageState:pageReducer,
        substanceState:substanceReducer,
        fertilizersState:fertilizersReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({}).concat([
            substanceApi.middleware,
            fertilizersApi.middleware,
            calculationApi.middleware,
            userApi.middleware
        ])
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
