import React from 'react'
import Style from './NavItem.module.css'

/**
 * represtnts item in navbar */
const navItem = (props)=>{
    return <li className={Style.navItem} onClick={()=>{props.pageNum(props.id)}}>
        <a  className={props.id===props.pageClass ?Style.active:Style.unactive}
        href='#'>{props.Item}</a>
    </li>

}

export default navItem;