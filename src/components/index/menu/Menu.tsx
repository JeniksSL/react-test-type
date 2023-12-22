import React, { FC, useState } from 'react';
import './menu.css';
import PageType from "../../../types/PageType";
import PageName from "../pagename/PageName";
import PageTypeProp from "../../../types/PageTypeProp";
import Calls = jasmine.Calls;

const Menu: FC<> = ({props:Function}) => {



    const [isOpen, setIsOpen] = useState<boolean>(false);


    return (
        <div className="menuLeft" id="menuLeft">
            <button className="menuButton" onClick={() => setIsOpen(!isOpen)} id="menuButton">MENU</button>
            {isOpen && (
                <div id="menu">
                    <a className="menuA" href="/index" id="id_index" onClick={() => {setIsOpen(!isOpen);
                        props(PageType.MAIN)} }>{PageType.MAIN}
                    </a>
                    <a className="menuA" href="/login" id="id_login" onClick={() => {setIsOpen(!isOpen);
                        props(PageType.SIGN_IN)}}>{PageType.SIGN_IN}</a>
                    <a className="menuA" href="/about" id="id_about" onClick={() => {setIsOpen(!isOpen);
                        props(PageType.ABOUT) }}>{PageType.ABOUT}</a>
                    <a className="menuA" href="/farmers" id="id_farmers" onClick={() => {setIsOpen(!isOpen);
                        props(PageType.FOR_HYDROPONICS)} }>{PageType.FOR_FARMERS}</a>
                    <a className="menuA" href="/hydroponics" id="id_hydroponics" onClick={() => {setIsOpen(!isOpen);
                        props(PageType.FOR_HYDROPONICS)} }>{PageType.FOR_HYDROPONICS}</a>
                </div>
            )}

        </div>
    );
};
export default Menu;