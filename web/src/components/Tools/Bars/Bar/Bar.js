import React from 'react'
import Style from './Bar.module.css';
import Stars from '../../../../containers/StarsRate/Stars' 
//const classes = [Style.Bar,'col-5'].join(' ');
const bar = (props)=>(
    <div className={Style.Bar}>
                <img className='img-responsive' src={props.src} alt='Image'/>
                <div style={{padding:'0'}} className={[Style.title,'col-10'].join(' ')}>
                   <p>{props.title}</p>
                   <br/>
                   <div className='row'>
                   <div className='col-7'><p id='address'>{props.address}</p></div>
                   
                   
                   
                </div>
                <div className={[Style.Stars,'col-lg'].join(' ')}>
                    <Stars rating={5-props.stars}/>
                </div>
            </div>
    </div>
) ;
export default bar