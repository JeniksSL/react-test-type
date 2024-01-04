import React, { FC } from 'react';
import MenuTop from "../header/MenuTop";
import {CalculationResponseDto} from "../../../types/responces/CalculationResponseDto";
import './resultTable.css'
import {useGetRequiredSubstances} from "../../../store/slices/substanceSlice";
import {useGetRequiredProducts} from "../../../store/slices/fertilizersSlice";
import ResultRow from "./ResultRow";


const ResultTable : FC<CalculationResponseDto> = (props) => {

    const substances = useGetRequiredSubstances();
    const products = useGetRequiredProducts()
    const subHeaderToRender =
        substances.map(it=><th className="resultTh" style={{
            backgroundColor: it.color
        }}>{it.name}</th>)
    const prodHeaderToRender =
        products.map(it=><th className="resultTh" style={{
            backgroundColor: it.color
        }}>{it.name}</th>)
    const casesToRender =
        props.cases.map((it, index)=>
            <ResultRow{...it} index={index}/>
        )


    return (
        <table>
            <tr>
                <th className="resultTh" rowSpan={2}>Number</th>
                <th className="resultTh" rowSpan={2}>Total cost</th>
                <th className="resultTh" rowSpan={2}>Total weight</th>
                <th className="resultTh" colSpan={substances.length}>Nutrients</th>
                <th className="resultTh" colSpan={products.length}>Fertilizers</th>
            </tr>
            <tr>
                {subHeaderToRender}
                {prodHeaderToRender}
            </tr>
            {casesToRender}
        </table>
    );
};


export default ResultTable