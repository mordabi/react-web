import React from 'react';
import NavItem from './NavItem/NavItem'
import Style from './NavItems.module.css';
/**
 * items array 
 * represnt all items in navbar 
 * ? could be statefull check if needed
 */
const Items = [ 'NIGHTLIFE','FEATURES','PRICING','CONTACT US','GET DEMO'];
const navItems = (props)=>{
    const Nav =Items.map((item,index)=>{

        return <NavItem key={index+item} id={index} pageNum={props.pageNum} Item={item} pageClass={props.pageClass}/>
    }) 

    return <ul className={props.class ? null :Style.navItems} style={props.class?props.class:null}>
        {Nav}
    </ul>
    
}
    
export default navItems
