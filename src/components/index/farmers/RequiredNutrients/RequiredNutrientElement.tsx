import React, {FC, useState} from 'react';
import '../farmersPage.css'
import {ISubstance} from "../../../../types/ISubstance";
import ListElementButton from "../buttons/ListElementButton/ListElementButton";
import {editRate, removeFromRequired} from "../../../../store/slices/substanceSlice";
import {useDispatch} from "react-redux";


type NutrientListElementProps = ISubstance

const RequiredNutrientElement: FC<NutrientListElementProps>=(props:NutrientListElementProps)=>{
    const [rate,  changeRate] = useState<number>(props.rate?props.rate:0)
    const color = (props.color)? props.color:"#FFFFFF"
    const dispatch = useDispatch();
    const removeSubstance = (id:number)  =>{
        dispatch(removeFromRequired(id));
    }
    const generateSpanName = props.name.split("").map((el:string) => (
        isNaN(Number.parseFloat(el))?el:<sub>{el}</sub>
    ))
    const changeRateHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newRate = Number.parseFloat(e.currentTarget.value);
        if (!isNaN(newRate)) changeRate(newRate);
    }
    const blurRateEvent = ()=>{
        dispatch(editRate({id:props.id, content:rate}))
    }

    return(
        <li className="substanceRaw fadeIn liLeft" title={props.description}  style={{
            backgroundColor: color
        }}>
            <div className="div_name">{generateSpanName}</div>
            <input
                className="input_rate"
                placeholder={rate.toString()}
                onChange={changeRateHandler}
                onBlur={blurRateEvent}
            ></input>
            <ListElementButton text={"\u2612"} className={"buttonRemove"} action={()=>removeSubstance(props.id)}/>
        </li>
    )
}


export default RequiredNutrientElement