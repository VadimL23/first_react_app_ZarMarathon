import React from "react";
import s from "./style.module.css";

interface IProps {
  title?:string,
  descr?:string    
    
}


const Header = (props:IProps) =>{
    
const {title = 'This is title', descr='This is Description!'} = props;
    return (
    <header className={s.root}>
    <div className={s.forest}></div>
    <div className={s.container}>
        <h1>{title}</h1>
        <p>{descr}</p>
    </div>
    </header>
    );
    
}

export default Header;