import React, {FC} from 'react';
import '../farmersPage.css'
import {IProduct} from "../../../../types/IProduct";
import {useGetRequiredProducts} from "../../../../store/slices/fertilizersSlice";
import UsingFertilizersElement from "./UsingFertilizersElement";







const UsingFertilizersList: FC=()=>{
    const data = useGetRequiredProducts()
    const productsToRender = data.map((al:IProduct) => (
        <UsingFertilizersElement {...al}/>
    ))
    return(
        <ul className="listFooter">
            {productsToRender}
        </ul>
    )
}

export default UsingFertilizersList