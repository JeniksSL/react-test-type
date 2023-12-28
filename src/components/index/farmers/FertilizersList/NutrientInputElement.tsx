import React, {FC} from 'react';
import {ISubstance} from "../../../../types/ISubstance";

export interface NutrientElementType {
    id: number;
    name: string;
    color: string;
    content: number
}
type NutrientElementProps = NutrientElementType&{isOpen:boolean}


const NutrientInputElement: FC<NutrientElementProps>=(props:NutrientElementProps)=>{
    const generateSpanTitle = props.name.split("").map((el:string) => (
        isNaN(Number.parseFloat(el))?el:"&lt;sub&gt;".concat(el).concat("&lt;sub/&gt;")
    )).join("");

    return(
            props.isOpen?<input
                className="input_type"
                title={generateSpanTitle}
                placeholder={props.content.toString()}
                style={{
                    backgroundColor: (props.color)? props.color:"#FFFFFF"
                }}
            />:<div
                className="input_type"
                style={{
                backgroundColor: (props.color)? props.color:"#FFFFFF"
            }}>{props.content.toString()}</div>

    )
}
export default NutrientInputElement