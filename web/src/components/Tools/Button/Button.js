import React from 'react';
import Style from './Button.module.css';
const Button =(props)=>{
    return <button style={{fontSize:props.size}}className={Style.Button}>{props.children}</button>
}

export default Button; 