import React from 'react';
import Style from './PhoneImage.module.css'

const phoneImage=(props)=>(
    <div className={Style.Image}>
        <img className={Style.Phone} src={props.src} alt='Phone'/>
        <img className={Style.Img} src={props.store} alt='store'/>
    </div>
)

export default phoneImage;