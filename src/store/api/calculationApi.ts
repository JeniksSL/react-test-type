
import basicInterceptor from "../../store/interseptors/basicInterceptor";
import {createApi} from "@reduxjs/toolkit/query/react";
import {CalculationRequestDto} from "../../types/requests/CalculationRequestDto";
import {CalculationResponseDto} from "../../types/responces/CalculationResponseDto";






export const calculationApi = createApi({
    reducerPath: 'calculationApi',
    baseQuery: basicInterceptor,
    endpoints: (build) => ({
        resolveCase: build.mutation<CalculationResponseDto, CalculationRequestDto>({
            query(body) {
                return {
                    url: 'fertilizers/products/resolve',
                    method: 'POST',
                    credentials: 'include',
                    body
                }
            }
        })
    })
})
export const {
    useResolveCaseMutation
} = calculationApi