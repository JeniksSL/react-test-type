import React, { FC, useState } from 'react';
import './pageName.css';
import PageType from "../../../types/PageType";
import PageTypeProp from "../../../types/PageTypeProp";


const PageName: FC<PageTypeProp> = (props) => {

    //const [currentPage, changePage] = useState<string>(PageType.MAIN);

    return (
        <div className="pageName">
            <p>{props.value}</p>
        </div>
    );
};
export default PageName;