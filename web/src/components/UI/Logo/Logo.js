import Logo from "../../../assets/Resources/menu-icon.png";
import React from 'react';
import Style from './Logo.module.css';
/**
 * logo class styles the logo
 */

const logo =(props)=>(
        <div className={Style.Logo}>
            <img src={Logo} alt='Logo'/>
        </div>
        );

export default logo;