import React, {FC, useState} from 'react';
import '../farmersPage.css'
import {ISubstance} from "../../../../types/ISubstance";
import ListElementButton from "../buttons/ListElementButton/ListElementButton";
import {useDispatch} from "react-redux";
import {IProduct} from "../../../../types/IProduct";
import {removeFromRequired} from "../../../../store/slices/fertilizersSlice";
import {editPrice} from "../../../../store/slices/fertilizersSlice";




type AvailableFertilizersElementProps = IProduct

const UsingFertilizersElement: FC<AvailableFertilizersElementProps>=(props:AvailableFertilizersElementProps)=>{
    const [price,  changePrice] = useState<number>(props.price?props.price:0)
    const color = (props.color)? props.color:"#FFFFFF"
    const dispatch = useDispatch();
    const removeProduct = (id:number)  =>{
        dispatch(removeFromRequired(id));
    }
    const changePriceHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        let newPrice = Number.parseFloat(e.currentTarget.value);
        if (!isNaN(newPrice)) changePrice(newPrice);
    }
    const blurPriceEvent = ()=>{
        dispatch(editPrice({id:props.id, price:price}))
    }
    return(
        <li className="fadeIn liLeft" title={props.fullName}  style={{
            backgroundColor: color
        }}>
            <div className="div_name">{props.name}</div>
            <input
                className="input_rate"
                placeholder={price.toString()}
                onChange={changePriceHandler}
                onBlur={blurPriceEvent}
            />
            <ListElementButton text={"\u2612"} className={"buttonRemove"} action={()=>removeProduct(props.id)}/>
        </li>
    )
}


export default UsingFertilizersElement