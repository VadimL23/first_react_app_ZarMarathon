import React, {useState} from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import s from "./style.module.css";

 interface IProps {
   handlerMenuClick?:()=>void,
                }


const MenuHeader =(props:IProps)=>{

const [showMenu, setShowMenu] = useState(false);    
const handlerMenuClick = ()=>{
   setShowMenu(!showMenu); 
}
    
return(
      <> 
    <Menu show={showMenu}/>
    <Navbar click={handlerMenuClick}/>
     </>
    );
    
}

export default MenuHeader;