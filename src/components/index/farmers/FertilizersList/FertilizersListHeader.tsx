import React, {FC} from 'react';
import '../farmersPage.css'


const FertilizersListHeader:FC=()=>{

    return(
        <li className="liRight">
            <div className="buttonAdd"></div>
            <input className="input_name" placeholder="name?"/>
            <div className="div_type">Mark</div>
        </li>
    )
}

export default FertilizersListHeader



