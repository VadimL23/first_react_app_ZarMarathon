import React from "react";
import s from "./style.module.css";

 interface IProps {
     onChangePage:(page:string)=>void,
                }


const GamePage =(props:IProps)=>{
   const {onChangePage} = props;
   const handleClickButton =()=>{
   onChangePage && onChangePage("home");
    }
    
return(
        
        <div>
            <button className={s.btn} onClick={handleClickButton}>Home page</button>
        </div>
    );
    
}

export default GamePage;