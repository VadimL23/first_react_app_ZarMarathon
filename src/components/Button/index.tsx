import React,{Component} from "react";
import s from "./style.module.css";
import cn from "classnames";

interface IProps{
    click?:(event: React.MouseEvent ) => void,
 children?: React.ReactNode,   

}

 const Button = (props:IProps) =>{
  
    
    const handlerClick = (event: React.MouseEvent)=>{
        props.click && props.click(event);
      
    }
    
 return (
       
            <button onClick={handlerClick} className={cn(s.btn)}>{props.children}</button>
                 
        
    );
    
}

export default Button;