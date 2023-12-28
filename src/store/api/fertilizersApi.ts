
import basicInterceptor from "../../store/interseptors/basicInterceptor";
import {sorterById} from "../../helpers/functions/sorters/sorterById";
import {PageDto} from "../../types/responces/pageDto";
import {createApi} from "@reduxjs/toolkit/query/react";
import {IProduct} from "../../types/IProduct";
import {ProductSearchRequest} from "../../types/requests/ProductSearchRequest";







export const fertilizersApi = createApi({
    reducerPath: 'fertilizersApi',
    baseQuery: basicInterceptor,
    endpoints: (build) => ({
        findAllFertilizersByCriteria: build.query<IProduct[], ProductSearchRequest>({
            query(searchRequest) {
                const queryString = Object.entries(searchRequest)
                    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent((v))}`)
                    .join("&");
                return {
                    url: 'fertilizers/products'.concat("?").concat(queryString),
                    credentials: 'include'
                }
            },
            transformResponse(baseQueryReturnValue: PageDto<IProduct>, meta: unknown, arg: unknown) {
                return sorterById(baseQueryReturnValue.objects)
            },
        })/*,
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
        })*/
    })
})
export const {
    useFindAllFertilizersByCriteriaQuery
} = fertilizersApi