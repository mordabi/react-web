import React from 'react';
import ReactDOM from 'react-dom';
import AnimationCount from 'react-count-animation';
import Style from './Stat.module.css';
 
const Count = (props) => {
  const settings = {
    start: props.count,
    count: props.stat,
    duration: props.duration,
    decimals: 0,
    useGroup: true,
    animation: 'up',
  };
 
 const addAnimation = props.update ? <h1><AnimationCount {...settings}/></h1>:null;
  
  return (
    <div className={[Style.Stat,'col'].join(' ')}>
       {addAnimation}
      <p>{props.title}</p>
    </div>
  );
}
 
export default Count;