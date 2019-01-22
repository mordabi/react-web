import React from 'react';
import Style from './ToolBar.module.css';
import NavItems from '../NavItems/NavItems'
import Logo from "../../UI/Logo/Logo"

/** include the nav items and the logo*/
const toolBar = (props)=>{
  
    return (
        <header className={Style.Toolbar}>
                <Logo/>
            <nav className={Style.DesktopOnly}>
                <NavItems pageNum={props.pageNum} pageClass={props.pageClass}/>
            </nav>
        </header>
    );
} 

export default toolBar