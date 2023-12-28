import React, {FC} from 'react';
import '../farmersPage.css'
import {ISubstance} from "../../../../types/ISubstance";
import ListElementButton from "../buttons/ListElementButton/ListElementButton";
import {removeFromRequired} from "../../../../store/slices/substanceSlice";
import {useDispatch} from "react-redux";


type NutrientListElementProps = ISubstance

const RequiredNutrientElement: FC<NutrientListElementProps>=(props:NutrientListElementProps)=>{
    const color = (props.color)? props.color:"#FFFFFF"
    const dispatch = useDispatch();
    const removeSubstance = (id:number)  =>{
        dispatch(removeFromRequired(id));
    }
    const generateSpanName = props.name.split("").map((el:string) => (
        isNaN(Number.parseFloat(el))?el:<sub>{el}</sub>
    ))
    return(
        <li className="substanceRaw fadeIn liLeft" title={props.description}  style={{
            backgroundColor: color
        }}>
            <div className="div_name">{generateSpanName}</div>
            <input className="input_rate" placeholder={props.rate?props.rate.toString():"0.0"}></input>
            <ListElementButton text={"\u2612"} className={"buttonRemove"} action={()=>removeSubstance(props.id)}/>
        </li>
    )
}


export default RequiredNutrientElement