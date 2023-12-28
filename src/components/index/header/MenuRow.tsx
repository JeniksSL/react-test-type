import React, { FC } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import MenuTop from "./MenuTop";

const MenuRow: FC = () => {

    return (
            <div className="row">
                <MenuTop/>
            </div>
    );
};

export default MenuRow;