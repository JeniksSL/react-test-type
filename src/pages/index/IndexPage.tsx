import React, {FC, useState} from 'react';
import './indexPage.css';
import MenuRow from "../../components/index/header/MenuRow";
import FarmersRows from "../../components/index/farmers/FarmersRows";
import {useAppSelector} from "../../store/store";
import PageType from "../../types/PageType";
import {useFindAllQuery} from "../../api/substanceApi/substanceApi";
import {putAllSub} from "../../store/slices/substanceSlice";
import {useDispatch} from "react-redux";
import {useFindAllFertilizersByCriteriaQuery} from "../../store/api/fertilizersApi";
import {putAll} from "../../store/slices/fertilizersSlice";


const IndexPage: FC = () => {
    const dispatch=useDispatch();
    const { data:substances } = useFindAllQuery()
    if (substances) dispatch(putAllSub(substances))
    const {data:products} = useFindAllFertilizersByCriteriaQuery({
        isCommon: true
    })
    if (products) dispatch(putAll(products))

    const selector = useAppSelector((state) => state.pageState)

    return (

            <div className="index-page">
                <div className="container min-vw-100">
                    <MenuRow/>
                    {selector.currentPage===PageType.FOR_FARMERS&&(<FarmersRows/>)}
                </div>

            </div>

    );
};
export default IndexPage;