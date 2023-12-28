import React, {FC, useState} from 'react';
import '../farmersPage.css'
import ListElementButton from "../buttons/ListElementButton/ListElementButton";
import {useDispatch} from "react-redux";
import {IProduct} from "../../../../types/IProduct";
import {putIntoRequired} from "../../../../store/slices/fertilizersSlice";

import {useGetAllNutrientInputs} from "../../../../store/slices/substanceSlice";
import NutrientInputElement from "./NutrientInputElement";


type FertilizersListElementProps = IProduct

const FertilizersListElement: FC<FertilizersListElementProps>=(props:FertilizersListElementProps)=>{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const color = (props.color)? props.color:"#FFFFFF";
    const dispatch = useDispatch();
    const addProduct = (id:number)  =>{
        dispatch(putIntoRequired(id));    }
    const [product, changeProduct] = useState<IProduct>(props)

    const setNameHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        changeProduct((prevState) => {prevState.name=e.currentTarget.value;return prevState})
    }


    const nutrientsToRender = useGetAllNutrientInputs(props.substanceSet).map((al) => (
        <NutrientInputElement {...al} isOpen={isOpen}/>
    ))

    return(
            <li title={props.fullName} className="liRight fertilizerRaw fadeIn" style={{
                backgroundColor: color
            }}>
                <div className={"upperWrapper"}>
                    <ListElementButton text={"\u140A"} className={"buttonAdd"} action={()=>addProduct(props.id)}/>
                    {isOpen?<input placeholder={props.name} onChange={setNameHandle} className="input_name"/>:
                    <div className="input_name">{props.name}</div>}
                    {nutrientsToRender}
                    <ListElementButton text={"\u2630"} className={"buttonProperties"} action={()=>setIsOpen(!isOpen)}/>
                </div>
                <div className={isOpen?"lowerWrapper":"lowerWrapper noDisplay"}>
                    <input placeholder={props.fullName} className="fullName"/>
                    <ListElementButton text={"Save"} className={"buttonSave"} action={()=>addProduct(props.id)}/>
                    <ListElementButton text={"Delete"} className={"buttonDelete"} action={()=>addProduct(props.id)}/>
                </div>
            </li>
    )
}


export default FertilizersListElement