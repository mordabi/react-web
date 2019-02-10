import React from 'react';
import Logo from '../../UI/Logo/Logo'
import Style from './SideDrawer.module.css';
import NavItems from '../NavItems/NavItems'

const css={
    height:'180%',
    display:'flex',
    flexFlow:'column',
    listStyle: 'none',
    justifyContent: 'space-between',
    padding:'0'
}
const sideDrawer = (props)=>{
    let classes = [Style.Container,Style.Close]
  if(!props.isClose)
{
    classes = [Style.Container,Style.Open];
}
return(
<div className={classes.join(' ')}>
      <div className='row mt-5'>   
     <div id='main' className='col'>
        <NavItems pageNum={props.pageNum} class={css}/>

     </div> 
    </div>
</div>
);
  

}

export default sideDrawer