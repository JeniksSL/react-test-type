import React, {FC} from 'react';
import '../farmersPage.css'
import {useFindAllQuery} from "../../../../api/substanceApi/substanceApi";
import {ISubstance} from "../../../../types/ISubstance";
import {useDispatch} from "react-redux";
import {useFindAllFertilizersByCriteriaQuery} from "../../../../store/api/fertilizersApi";
import {putAll, useGetAllProducts} from "../../../../store/slices/fertilizersSlice";
import {IProduct} from "../../../../types/IProduct";
import FertilizersListElement from "./FertilizersListElement";

const AvailableFertilizersList: FC=()=>{



    const dispatch = useDispatch();
    const products=useGetAllProducts()

    const productsToRender = products?.map((al) => (
        <FertilizersListElement {...al}/>
    ))
    return(
        <ul className="listFooter">
            {productsToRender}
        </ul>
    )
}

export default AvailableFertilizersList