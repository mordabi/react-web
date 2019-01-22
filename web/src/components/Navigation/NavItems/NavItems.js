import React from 'react';
import NavItem from './NavItem/NavItem'
import Style from './NavItems.module.css';

const Items = [ 'NightLife','Features','pricing','pricing','contact us','Get Demo'];
const active =false;
const navItems = (props)=>{
    const Nav =Items.map((item,index)=>{

        return <NavItem key={index+item} id={index} pageNum={props.pageNum} Item={item} pageClass={props.pageClass}/>
    }) 

    return <ul className={Style.navItems}>
        {Nav}
    </ul>
    
}
    
export default navItems
