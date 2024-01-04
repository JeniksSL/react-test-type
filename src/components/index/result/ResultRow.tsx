import React, { FC } from 'react';
import {CalculationCaseDto} from "../../../types/responces/CalculationCaseDto";
import {useGetRequiredSubstances} from "../../../store/slices/substanceSlice";
import {useGetRequiredProducts} from "../../../store/slices/fertilizersSlice";
import './resultTable.css'

type ResultRowProps = CalculationCaseDto&{index:number}

const ResultRow:FC<ResultRowProps> = (props)=>{

    const substances = useGetRequiredSubstances();
    const products = useGetRequiredProducts()
    const subHeaderToRender =
        substances.map(it=><th className="resultTd" style={{
            backgroundColor: it.color
        }}>{props.substances.find(substance=>substance.id===it.id)?.content}</th>)
    const prodHeaderToRender =
        products.map(it=><th className="resultTd" style={{
            backgroundColor: it.color
        }}>{props.products.find(product=>product.id===it.id)?.rate}</th>)



    return (
            <tr>
                <th className="resultTd">{props.index}</th>
                <th className="resultTd">{props.totalPrice}</th>
                <th className="resultTd">Total weight</th>
                {subHeaderToRender}
                {prodHeaderToRender}
            </tr>
    );
}

export default ResultRow