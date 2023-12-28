import React, {FC, useState} from 'react';
import PageType from "../../../types/PageType";
import './menu.css';

interface MenuComponentProps {
    type: PageType;
    changeMenuStatus: (type: PageType) => void;
    className: string
}

export const MenuComponent: FC<MenuComponentProps> = (props)=>{
    const type = props.type

    return(
        <div className={props.className} onClick={() => {
          props.changeMenuStatus(type)
        }}>{type}
        </div>
    )
}

