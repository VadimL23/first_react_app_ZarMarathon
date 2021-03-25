import React,{useContext,useEffect,useState} from "react";
import s from "./style.module.css";
import cn from "classnames";
import {useHistory} from "react-router-dom";

import PockemonCard from "components/PockemonCard";
import {PockemonContext} from "context/pockemonContext";
import PlayerBoard from "./PlayerBoard";


const handleCardClick = (target)=>{
    console.log(target);
    const cardActive = cn({[s.selected]:!s.selected},s.card,s.root);
}

const handlerClickBoardPlate = (pos:number)=>{
    
    console.log(pos);
}


const BoardPage = () => {
  
        const {pockemons} = useContext(PockemonContext);
    
    const [board, setBoard] = useState([]);
    const [player2, setPlayer2] = useState([]);
    const [choiseCard, setchoiseCard] = useState(null);
    
    
    useEffect(()=>{
        const br = fetch("https://reactmarathon-api.netlify.app/api/board").then((br)=>{
            const boardReq = br.json();
            return boardReq;
        }).then((r)=>{setBoard(r.data)}).then((r)=>console.log(r));
      
        const pl2 = fetch("https://reactmarathon-api.netlify.app/api/create-player").then((p)=>p.json()).then((r)=>{setPlayer2(r.data)});
        
        
        
        },[]);
    
//  const history = useHistory() ;
//  if (Object.keys(pockemons).length === 0){
//      history.replace("/game");
//  }
    
    

    
console.log('pockemon ',pockemons);
    return (
        
        <div className={cn(s.root)}>
						<div className={cn(s.playerOne)}>
        <PlayerBoard 
        onClickCard = {(card)=>setChoiseCard(card)}
        card = {Object.values(pockemons)}/>
         
						</div>
            <div className={cn(s.board)}>
               {
                    board.map((item)=>(
                    <div 
                    key={item.position}
                    className={cn(s.boardPlate)}
                    onClick={()=>!item.card && handlerClickBoardPlate(item.position)}
                    >
                    item.card && <PockemonCard
                    {...item} minimize
                    />
                    </div>
                  ))
                }
               
              
            </div>
        </div>
        
        
        <div className={cn(s.playerTwo)}>
        
        <PlayerBoard 
         onClickCard = {(card)=>setChoiseCard(card)}
        card = {player2}/>
        
                </div>
    );
};

export default BoardPage;