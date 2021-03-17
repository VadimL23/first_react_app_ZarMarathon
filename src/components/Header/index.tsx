import React,{MouseEvent} from "react";
import s from "./style.module.css";


interface IProps {
  title?:string,
  descr?:string,    
  onClickButton:(page:string)=>void  
}

const Header = (props:IProps) =>{
 
    const handleClick =()=>{
     console.log("Header");
     props.onClickButton && props.onClickButton("game");
    }
    
  
    
    
const {title = 'This is title', descr='This is Description!'} = props;
    return (
    <header className={s.root}>

    <div className={s.forest}></div>
   
     <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
     
         <button onClick = {handleClick} className={s.btn}>Start Game</button>

   
     </div>
    </header>
    );
    
}

export default Header;