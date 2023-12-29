import React, {FC, useState} from 'react';
import '../farmersPage.css'
import ListElementButton from "../buttons/ListElementButton/ListElementButton";
import {useDispatch} from "react-redux";
import {IProduct} from "../../../../types/IProduct";
import {putIntoRequired} from "../../../../store/slices/fertilizersSlice";

import {useGetAllNutrientInputs} from "../../../../store/slices/substanceSlice";
import NutrientInputElement from "./NutrientInputElement";
import {ISubstanceCompact} from "../../../../types/ISubstanceCompact";


type FertilizersListElementProps = IProduct

const FertilizersListElement: FC<FertilizersListElementProps>=(props:FertilizersListElementProps)=>{
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const color = (props.color)? props.color:"#FFFFFF";
    const dispatch = useDispatch();
    const addProduct = (id:number)  =>{
        dispatch(putIntoRequired(id));    }
    const [product, changeProduct] = useState<IProduct>(props)

    const setNameHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        let copy ={...product}
        copy.name=e.currentTarget.value;
       changeProduct(copy)
    }
    const setNutrientContent = (substanceCompact: ISubstanceCompact) =>{
        let copy ={...product}
        let arrayCopy: ISubstanceCompact[]= [];
        arrayCopy.push(...copy.substanceSet);
        let current = arrayCopy.findIndex((isub)=>isub.id===substanceCompact.id)
        if (current<0) arrayCopy.push(substanceCompact)
        else arrayCopy[current] = substanceCompact;
        copy.substanceSet=arrayCopy;
        changeProduct(copy)
    }
    const setFullNameHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        let copy ={...product}
        copy.fullName=e.currentTarget.value;
        changeProduct(copy)
    }

    const nutrientsToRender = useGetAllNutrientInputs(product.substanceSet).map((al) => (
        <NutrientInputElement {...al} isOpen={isOpen} changeContent={setNutrientContent}/>
    ))


    return(
            <li title={product.fullName} className="liRight fertilizerRaw fadeIn" style={{
                backgroundColor: color
            }}>
                <div className={"upperWrapper"}>
                    <ListElementButton text={"\u140A"} className={"buttonAdd"} action={()=>addProduct(product.id)}/>
                    {isOpen?<input placeholder={product.name} onChange={setNameHandle} className="input_name"/>:
                    <div className="input_name">{product.name}</div>}
                    {nutrientsToRender}
                    <ListElementButton text={"\u2630"} className={"buttonProperties"} action={()=>setIsOpen(!isOpen)}/>
                </div>
                <div className={isOpen?"lowerWrapper":"lowerWrapper noDisplay"}>
                    <input placeholder={product.fullName} className="fullName" onChange={setFullNameHandle}/>
                    <ListElementButton text={"Save"} className={"buttonSave"} action={()=>addProduct(props.id)}/>
                    <ListElementButton text={"Delete"} className={"buttonDelete"} action={()=>addProduct(props.id)}/>
                </div>
            </li>
    )
}


export default FertilizersListElement