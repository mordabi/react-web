import React from 'react'
import Style from './Bar.module.css';
import Stars from '../../../../containers/StarsRate/Stars' 
//const classes = [Style.Bar,'col-5'].join(' ');
const bar = (props)=>(
    <div className={Style.Bar}>
                <img className='img-responsive' src={props.src} alt='Image'/>
                <div className={Style.title}>
                   <p>{props.title}</p>
                   <p id='address'>{props.address}</p>
                </div>
                <div className={Style.Stars}>
                    <Stars rating={5-props.stars}/>
                </div>
        </div>
) ;
export default bar