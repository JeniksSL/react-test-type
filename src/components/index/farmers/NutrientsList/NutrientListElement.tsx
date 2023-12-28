import React, {FC} from 'react';
import '../farmersPage.css'
import {ISubstance} from "../../../../types/ISubstance";
import ListElementButton from "../buttons/ListElementButton/ListElementButton";
import {useDispatch} from "react-redux";
import {putIntoRequired} from "../../../../store/slices/substanceSlice";


type NutrientListElementProps = ISubstance

const NutrientListElement: FC<NutrientListElementProps>=(props:NutrientListElementProps)=>{
const color = (props.color)? props.color:"#FFFFFF";

    const dispatch = useDispatch();
    const addSubstance = (id:number)  =>{
        dispatch(putIntoRequired(id));
    }

const generateSpanName = props.name.split("").map((el:string) => (
    isNaN(Number.parseFloat(el))?el:<sub>{el}</sub>
));

    return(
        <li className="substanceRaw fadeIn liRight" title={props.description}  style={{
            backgroundColor: color
        }}>
            <ListElementButton text={"\u140A"} className={"buttonAdd"} action={()=>addSubstance(props.id)}/>
            <input className="input_name noEdit" value={props.description}></input>
            <div className="div_type">{generateSpanName}</div>
            <ListElementButton text={"\u2630"} className={"buttonProperties"} action={()=>addSubstance(props.id)}/>
        </li>
    )
}


export default NutrientListElement