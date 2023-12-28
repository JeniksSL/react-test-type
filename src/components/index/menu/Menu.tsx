import React, {FC, useRef, useState} from 'react';
import './menu.css';
import PageType from "../../../types/PageType";
import {useDispatch} from "react-redux";
import {setPage} from "../../../store/slices/pageSlice";
import {MenuComponent} from "./MenuComponent";



const Menu: FC = () => {

    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const menuRef = useRef<HTMLInputElement>(null)

    const [childClassName, changeChild] = useState("menuA")

    const animationEndHandler = (e: React.AnimationEvent<HTMLDivElement>
    ) => {
        if (e.animationName === 'open-menu') {
            setIsOpen(true);
            e.currentTarget.className=""
        }

        if (e.animationName === 'close-menu') {
            setIsOpen(false);
            e.currentTarget.className="noDisplay"
        }
    };
    const changeMenuStatus = (pageType?:PageType)=> {
        if (pageType&&isOpen) {
            dispatch(setPage(pageType))
        }
        if (isOpen) {
            if(menuRef.current){
                menuRef.current.className = "menu-closed"
                changeChild("menuA child-closed")
            }
        } else {
            if(menuRef.current){
                menuRef.current.className = "menu-open"
                changeChild("menuA child-open")
            }
        }
    }


    return (
        <div className="menuLeft" id="menuLeft">
            <button className="menuButton" onClick={() => changeMenuStatus()} id="menuButton">MENU</button>

            <div
                onAnimationEnd={(event ) => animationEndHandler(event)}
                ref={menuRef}
                className="noDisplay"
            >
                <MenuComponent className={childClassName} type={PageType.MAIN} changeMenuStatus={changeMenuStatus}></MenuComponent>
                <MenuComponent className={childClassName} type={PageType.SIGN_IN} changeMenuStatus={changeMenuStatus}></MenuComponent>
                <MenuComponent className={childClassName} type={PageType.ABOUT} changeMenuStatus={changeMenuStatus}></MenuComponent>
                <MenuComponent className={childClassName} type={PageType.FOR_FARMERS} changeMenuStatus={changeMenuStatus}></MenuComponent>
                <MenuComponent className={childClassName} type={PageType.FOR_HYDROPONICS} changeMenuStatus={changeMenuStatus}></MenuComponent>
            </div>


        </div>
    );
};
export default Menu;