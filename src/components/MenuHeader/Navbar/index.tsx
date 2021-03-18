import React,{useState} from "react";
import  s from "./style.module.css";
import cn from "classnames";


interface IProps{
    click:()=>void,
    bgActive:boolean
}

const Navbar = (props:IProps)=>{

const {click,bgActive} =props;
const [burger, setBurger] = useState(false);
 const styleBurger = cn(s.menuButton,
                        {[s.active]:burger}, 
                        {[s.bgActive]:bgActive} );
    
    const handlerClick = ()=>{
    setBurger(!burger);
    click();
}
     
     
    return (<nav id={s.navbar} className={cn(s.root)}>
  <div className={cn(s.navWrapper)}>
    <p className={cn(s.brand)} onClick={handlerClick}>
      LOGO
    </p>
    <a className={styleBurger} onClick={handlerClick}>
      <span />
    </a>
  </div>
</nav>);
}
export default Navbar;