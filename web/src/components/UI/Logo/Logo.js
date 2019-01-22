import Logo from "../../../assets/Resources/map/bar_pin.png";
import React from 'react';
import Style from './Logo.module.css';
/**
 * logo class styles the logo
 */

const logo =(props)=>(
        <div className={Style.Logo}>
            <img src={Logo}/>
            <b>tizz.</b>
        </div>
        );

export default logo;