import React from 'react'
import Style from './NavItem.module.css'

/**
 * represtnts item in navbar */
const navItem = (props)=>{
    return (
        <li className={Style.navItem} onClick={()=>{props.pageNum(props.id)}}>
    <div className={props.id===props.pageClass ?Style.active:Style.unactive}> 
        <a
         href='#'>{props.Item}</a>
    </div>
        
    </li>
    );
    

}

export default navItem;