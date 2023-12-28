import React, { FC, useState } from 'react';
import './pageName.css';

import { useAppSelector} from "../../../store/store";



const PageName: FC = () => {

    const selector = useAppSelector((state) => state.pageState)


    return (
        <div className="pageName">
            <p>{selector.currentPage}</p>
        </div>
    );
};
export default PageName;