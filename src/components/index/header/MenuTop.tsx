import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './menuContainers.css'
import Menu from "../menu/Menu";
import PageName from "../pagename/PageName";
import Avatar from "../avatar/Avatar";

const MenuTop: FC = () => {

    return (

        <div className="col-12 menu_top">
            <div className="menu_bottom">
                <Menu/>
                <PageName/>
                <Avatar/>
            </div>
        </div>

    );
};
export default MenuTop