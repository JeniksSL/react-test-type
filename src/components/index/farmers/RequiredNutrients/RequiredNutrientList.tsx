import React, {FC} from 'react';
import '../farmersPage.css'
import {ISubstance} from "../../../../types/ISubstance";
import {useGetRequiredSubstances, putAll, removeFromRequired} from "../../../../store/slices/substanceSlice";
import RequiredNutrientElement from "./RequiredNutrientElement";




const RequiredNutrientList: FC=()=>{
    const data = useGetRequiredSubstances()
    const substancesToRender = data.map((al:ISubstance) => (
        <RequiredNutrientElement {...al}/>
    ))
    return(
        <ul className="listFooter">
            {substancesToRender}
        </ul>
    )
}

export default RequiredNutrientList

