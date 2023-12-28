
import basicInterceptor from "../../store/interseptors/basicInterceptor";
import {ISubstance} from "../../types/ISubstance";
import {sorterById} from "../../helpers/functions/sorters/sorterById";
import {SubtanceSearchRequest} from "../../types/requests/SubtanceSearchRequest";
import {PageDto} from "../../types/responces/pageDto";
import {createApi} from "@reduxjs/toolkit/query/react";







export const substanceApi = createApi({
    reducerPath: 'substanceApi',
    baseQuery: basicInterceptor,
    endpoints: (build) => ({
        findAllByCriteria: build.query<ISubstance[], SubtanceSearchRequest>({
            query(searchRequest?) {
                return {
                    url: 'fertilizers/substances',
                    credentials: 'include',
                    params: {searchRequest},
                }
            },
            transformResponse(baseQueryReturnValue: PageDto<ISubstance>, meta: unknown, arg: unknown) {
                 return sorterById(baseQueryReturnValue.objects)
            },
        }),
        findAll:build.query<ISubstance[], void>({
            query() {
                return {
                    url: 'fertilizers/substances',
                    credentials: 'include'
                }
            },
            transformResponse(baseQueryReturnValue: PageDto<ISubstance>, meta: unknown, arg: unknown) {
               return sorterById(baseQueryReturnValue.objects)
            },
        })
    })
})
export const {
    useFindAllByCriteriaQuery,
    useFindAllQuery
} = substanceApi