import React, {FC} from 'react';
import '../farmersPage.css'


const NutrientsListHeader:FC=()=>{

    return(
        <li className="liRight">
            <div className="buttonAdd"></div>
            <div className="div_name">Mark</div>
            <div className="div_type">Rate</div>
        </li>
    )
}

export default NutrientsListHeader