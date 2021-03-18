import React,{useState} from "react";
import s from "./style.module.css";
import cn from "classnames";
import {Link} from "react-router-dom";


const MENU = [
    {title:"HOME",
    to:"#welcom"},
    {title:"GAME",
    to:"#game"},
    {title:"ABOUT",
    to:"#about"},
    {title:"CONTACT",
    to:"#contact"}
    
]

interface IProps{
    show:boolean
}


const Menu = (props:IProps)=>{
    
const {show} = props;
    
    const menuContainer =cn(
`${s.menuContainer}`,
   {[s.active]:show},
    {[s.deactive]:!show},
    
    
);

    return (
    <div className= {menuContainer}>
  <div className="overlay" />
  <div className="menuItems">
    <ul>
    {MENU.map((el,i)=>{
            return(
            <li key={i} >

                <Link to={el.to}>
            {el.title}
                </Link>

            </li>
            )
            
        })}
    </ul>
  </div>
</div>
    
    );
    
    
}

export default Menu;