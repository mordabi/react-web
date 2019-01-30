import React from 'react';
import Style from './PhoneImage.module.css'

const phoneImage=(props)=>(
    <div className={Style.Image}>
    <div className={Style.Phone}>
        <img  src={props.src} alt='Phone'/>
    </div>
    <div className={Style.Img}>    
        <img  src={props.store} alt='store'/>
    </div>
    </div>
)

export default phoneImage;