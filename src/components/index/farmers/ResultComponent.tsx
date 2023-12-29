import React, {FC, useState} from 'react';
import './farmersPage.css'
import {useCreateCalculationRequest} from "../../../store/slices/calculationSlice";
import {useResolveCaseMutation} from "../../../store/api/calculationApi";



const ResultComponent: FC=()=>{
    const req=useCreateCalculationRequest()
    const [resp] = useResolveCaseMutation()
    const respo = resp(req)
    console.log(req);
    console.log(respo);
    return(
        <li className="substanceRaw fadeIn liLeft" >
        </li>
    )
}


export default ResultComponent