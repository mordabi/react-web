import Logo from "../../../assets/Resources/map/bar_pin.png";
import React from 'react';
import Style from './Logo.module.css'

const logo =(props)=>(
        <div className={Style.Logo}>
            <img src={Logo}/>
        </div>
        );

export default logo;