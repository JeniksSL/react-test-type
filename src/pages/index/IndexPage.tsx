import React, {FC, useState} from 'react';
import './indexPage.css';
import Avatar from "../../components/index/avatar/Avatar";
import PageName from "../../components/index/pagename/PageName";
import Menu from "../../components/index/menu/Menu";
import PageType from "../../types/PageType";
import PageTypeProp from "../../types/PageTypeProp";

const IndexPage: FC = () => {
    const [isFired, updatePage] = useState<PageTypeProp>({value: PageType.MAIN});
    const update = (newValue:PageType)=>{updatePage({value:newValue})};

    return (

        <>
            <div className="index-page">
                <Menu  apply={updatePage}/>
                <PageName{...isFired}/>
                <Avatar/>
            </div>

        </>
    );
};
export default IndexPage;