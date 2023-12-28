import React, {FC} from 'react';

interface ButtonProps{
    text:string
    className:string
    action: ()=>void
}
const ListElementButton: FC<ButtonProps>=(props:ButtonProps)=>{

    return(
        <button className={props.className} onClick={props.action}>
            {props.text}
        </button>

    )
}
export default ListElementButton
