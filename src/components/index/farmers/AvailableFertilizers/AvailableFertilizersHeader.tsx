import React, {FC} from 'react';
import '../farmersPage.css'

const AvailableFertilizersHeader:FC=()=>{

    return(
    <li className="liLeft">
        <div className="div_name">Name</div>
        <div className="div_type">Price</div>
        <button className="buttonRemove" title="Remove all">&#8998</button>
        <button className="buttonHeader" title="Properties">USD/t</button>
    </li>
    )
}

export default AvailableFertilizersHeader