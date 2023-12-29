import React, {FC} from 'react';
import {ISubstanceCompact} from "../../../../types/ISubstanceCompact";

export interface NutrientElementType {
    id: number;
    name: string;
    color: string;
    content: number
}
type NutrientElementAdditionalProps = {
    changeContent(newContent:ISubstanceCompact): void
    isOpen:boolean;
}
type NutrientElementProps = NutrientElementType&NutrientElementAdditionalProps


const NutrientInputElement: FC<NutrientElementProps>=(props:NutrientElementProps)=>{
    const generateSpanTitle = props.name.split("").map((el:string) => (
        isNaN(Number.parseFloat(el))?el:"<sub>".concat(el).concat("<sub/>")
    )).join("");

    const changeContentHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newContent = Number.parseFloat(e.currentTarget.value);
        if (!isNaN(newContent)) props.changeContent({id:props.id, content:newContent});
    }
    return(
            props.isOpen?<input
                className="input_type"
                title={generateSpanTitle}
                placeholder={props.content.toString()}
                style={{
                    backgroundColor: (props.color)? props.color:"#FFFFFF"
                }}
                onChange={changeContentHandle}
            />:<div
                className="input_type"
                style={{
                backgroundColor: (props.color)? props.color:"#FFFFFF"
            }}>{props.content.toString()}</div>

    )
}
export default NutrientInputElement