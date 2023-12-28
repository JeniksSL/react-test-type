import React, {FC, useState} from 'react';
import './indexPage.css';
import MenuRow from "../../components/index/header/MenuRow";
import FarmersRows from "../../components/index/farmers/FarmersRows";
import {useAppSelector} from "../../store/store";
import PageType from "../../types/PageType";


const IndexPage: FC = () => {

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