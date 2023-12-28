import React, {FC, useState} from 'react';
import './requiredNutrients.css';
import '../farmersPage.css'

const RequiredNutrientsHeader:FC=()=>{

    return(
        <li className="liLeft">
            <div className="div_name">Mark</div>
            <div className="div_type">Rate</div>
            <button className="buttonRemove" title="Remove all">&#8998</button>
            <button id="subProperties" className="buttonHeader" title="Properties">kg/ha
            </button>
        </li>
    )
}

export default RequiredNutrientsHeader