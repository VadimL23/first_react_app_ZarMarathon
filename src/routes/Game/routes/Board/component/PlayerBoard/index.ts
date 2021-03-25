
import React from "react";
import cn from "classnames";
import s from "./style.module.css";
import PockemonCard from "components/PockemonCard";

interface IProps{
 cards:[],
     onClickCard:any
    
}

const PlayerBoard = (props:IProps) =>{
    
    const {cards,onClickCard} = props;
    
    const [isSelect, setSelect] = useState(null);
    
    return (
    <>
        
        { cards.map((el)=>
         
         (   
         
         <div className= {cn(s.cardBoard)}>
         <PockemonCard
             classname={cn(s.cardBoard,
            {[s.select]:isSelected === el.id})}
            onClick = {setSelected(el.id)}
             name ={el.name}
             img = {el.img}
             id = {el.id}
             type={el.type}
             values = {el.values} 
             key="1"
            minimize={true}
             isActive = {el.isActive}
              isSelected = {el.isSelected && el.isSelected}
              handleClick={handleCardClick}
              
              onClick={()=>{setSelected(id);onClickCard && onClickCard(el)}
              />
               
                </div>
               )}
        
        
        
        </>
    );
    
}

export default PlayerBoard;