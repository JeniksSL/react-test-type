import React, {FC} from 'react';
import '../farmersPage.css'
import {useFindAllQuery} from "../../../../api/substanceApi/substanceApi";
import NutrientListElement from "./NutrientListElement";
import {ISubstance} from "../../../../types/ISubstance";
import {useDispatch} from "react-redux";
import {putAll} from "../../../../store/slices/substanceSlice";

const NutrientList: FC=()=>{

    const dispatch = useDispatch();
    const { data:substances } = useFindAllQuery()
    if (substances) dispatch(putAll(substances))

    const substancesToRender = substances?.map((al:ISubstance) => (
        <NutrientListElement {...al}/>
    ))
    return(
        <ul className="listFooter">
            {substancesToRender}
        </ul>
    )
}

export default NutrientList

