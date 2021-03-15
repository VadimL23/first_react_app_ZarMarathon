import React,{useState} from "react";
import s from "./style.module.css";
import cn from "classnames";


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
      <li>
        <a href="#welcome">
          HOME
        </a>
      </li>
      <li>
        <a href="#game">
          GAME
        </a>
      </li>
      <li>
        <a href="#about">
          ABOUT
        </a>
      </li>
      <li>
        <a href="#contact">
          CONTACT
        </a>
      </li>
    </ul>
  </div>
</div>
    
    );
    
    
}

export default Menu;