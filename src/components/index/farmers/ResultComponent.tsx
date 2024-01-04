import React, {FC, useState} from 'react';
import './farmersPage.css'
import {useCreateCalculationRequest} from "../../../store/slices/calculationSlice";
import {useResolveCaseMutation} from "../../../store/api/calculationApi";
import {CalculationRequestDto} from "../../../types/requests/CalculationRequestDto";

interface ResultProps{

    action: (req: CalculationRequestDto)=>void
}

const ResultComponent: FC<ResultProps>=(props)=>{

    const req= useCreateCalculationRequest()
    const res = props.action(req)

    return(
        <li className="substanceRaw fadeIn liLeft" >

        </li>
    )
}


export default ResultComponent