import React, {useState} from "react";
import Menu from "./Menu";
import Navbar from "./Navbar";
import s from "./style.module.css";

 interface IProps {
   handlerMenuClick?:()=>void,
     bgActive:boolean  
                }


const MenuHeader =(props:IProps)=>{

const {bgActive} = props;
const [showMenu, setShowMenu] = useState(false);    

   const handlerMenuClick = ()=>{
   setShowMenu(!showMenu); 
}
    
return(
      <> 
    <Menu show={showMenu}/>
    <Navbar click={handlerMenuClick} bgActive={bgActive}/>
     </>
    );
    
}

export default MenuHeader;