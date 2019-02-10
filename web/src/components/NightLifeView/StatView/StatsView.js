import Style from './Stats.module.css';
import React from 'react';
import Stat from '../../Stat/Stat'



const stats =(props)=>{

const classes = [Style.Stats,'container-fluid'].join(' ');
let Statistics = [
    {
        stat:245459,
        title:'THIS WEEK',
        duration:3000
    },
    {
        stat:42980,
        title:'TODAY',
        duration:2500
    },
    {
        stat:1873,
        title:'THIS HOUR',
        duration:2000
    }
];

Statistics = Statistics.map((StatOb)=><Stat key={StatOb.title}  duration={StatOb.duration} update={props.update} stat={StatOb.stat} title={StatOb.title} count={StatOb.stat-100}/>)
return(
<div className ={classes} ref={props.reForward}>
    <div className='row justify-content-center mt-5'>
        <h1>
            connects with <span>tizz</span>
        </h1>
    </div>
    <div className='row mt-5 mb-4'>
      {Statistics}
    </div>
</div>
);
};
export default stats;