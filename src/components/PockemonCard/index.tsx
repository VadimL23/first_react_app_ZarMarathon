import React,{useState} from "react";
import s from "./style.module.css";
import cn from 'classnames';
import cbs from "../../assets/cardbackside.jpg";

interface IProps {
  name:string,
  img:string,
  id:number,
   type:string,
   values:{top:number|string,
          right:number|string,
          bottom:number|string,
          left:number|string},
    isActive:boolean,
    handleClick:(id:number)=>void,
}

export default function PockemonCard(props :IProps){
    
const {  
  name,
  img,
  id,
  type,
  values,
    isActive,
handleClick} = props;
                           

    
  const handlerClick = (event:React.MouseEvent):void =>{
      handleClick(id);
      }
 
     return(
    <div className={s.root} >
      
       <div className={cn((s.pokemonCard),{[s.active]:isActive})} onClick={handlerClick}>
       
            <div className={s.cardFront}>
            <div className={cn(s.wrap,s.back)}>
                <div className={cn(s.pokemon,s[type]) }>
                    <div className={s.values}>
                        <div className={cn(s.count,s.top)}>{values.top}</div>
                        <div className={cn(s.count,s.right)}>{values.right}</div>
                        <div className={cn(s.count,s.bottom)}>{values.bottom}</div>
                        <div className={cn(s.count,s.left)}>{values.left}</div>
                    </div>
                    <div className={s.imgContainer}>
                        <img src={img} alt={name} />
                    </div>
                    <div className={s.info}>
                        <span className={s.number}>#{id}</span>
                        <h3 className={s.name}>name</h3>
                        <small className={s.type}>Type: <span>type</span></small>
                    </div>
                </div>
            </div>
        </div>

        <div className={s.cardBack}>
            <div className={cn(s.wrap,s.back)}>
                <img src={cbs} alt="The other side of the moon"/>
            </div>
        </div>

    </div>
</div>
    )
}