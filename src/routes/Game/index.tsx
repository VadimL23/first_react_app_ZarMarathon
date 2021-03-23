import React, {useState, useEffect} from "react";
import s from "./style.module.css";
import MenuHeader from "components/MenuHeader";
import {useHistory} from "react-router-dom";
import Layout from "components/Layout";
import PockemonCard from "components/PockemonCard";
import nonename from "assets/nonename.jpg";
import database,{writePockemonData, generateKey} from "service/firebase";
import Button from "components/Button";
interface IPockemons{
  abilities: string[ ],
  stats: {
    hp: number,
    attack: number,
    defense: number,
    "special-attack": number,
    "special-defense": number,
    speed: number
  },
  type: string,
  img: string,
  name: string,
  base_experience: number,
  height:number,
  id: number,
  isActive?:boolean,
  values: {
    top: string | number,
    right: string | number,
    bottom: string | number,
    left: string | number
  }
}

const POCKEMONS:IPockemons[] = [
  {
    "abilities": [
      "keen-eye",
      "tangled-feet",
      "big-pecks"
    ],
    "stats": {
      "hp": 63,
      "attack": 60,
      "defense": 55,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 71
    },
    "type": "flying",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    "name": "pidgeotto",
    "base_experience": 122,
    "height": 11,
    "id": 17,
    "values": {
      "top": "A",
      "right": 2,
      "bottom": 7,
      "left": 5
    }
  },
  {
    "abilities": [
      "intimidate",
      "shed-skin",
      "unnerve"
    ],
    "stats": {
      "hp": 60,
      "attack": 95,
      "defense": 69,
      "special-attack": 65,
      "special-defense": 79,
      "speed": 80
    },
    "type": "poison",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/24.png",
    "name": "arbok",
    "base_experience": 157,
    "height": 35,
    "id": 24,
    "values": {
      "top": 5,
      "right": 9,
      "bottom": "A",
      "left": "A"
    }
  },
  {
    "abilities": [
      "static",
      "lightning-rod"
    ],
    "stats": {
      "hp": 35,
      "attack": 55,
      "defense": 40,
      "special-attack": 50,
      "special-defense": 50,
      "speed": 90
    },
    "type": "electric",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    "name": "pikachu",
    "base_experience": 112,
    "height": 4,
    "id": 25,
    "values": {
      "top": 8,
      "right": "A",
      "bottom": 9,
      "left": 6
    }
  },
  {
    "abilities": [
      "overgrow",
      "chlorophyll"
    ],
    "stats": {
      "hp": 45,
      "attack": 49,
      "defense": 49,
      "special-attack": 65,
      "special-defense": 65,
      "speed": 45
    },
    "type": "grass",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    "name": "bulbasaur",
    "base_experience": 64,
    "height": 7,
    "id": 1,
    "values": {
      "top": 8,
      "right": 4,
      "bottom": 2,
      "left": 7
    }
  },
  {
    "abilities": [
      "blaze",
      "solar-power"
    ],
    "stats": {
      "hp": 39,
      "attack": 52,
      "defense": 43,
      "special-attack": 60,
      "special-defense": 50,
      "speed": 65
    },
    "type": "fire",
    "img": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    "name": "charmander",
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "values": {
      "top": 7,
      "right": 6,
      "bottom": 1,
      "left": 4
    }
  }
];


 interface IProps {
     onChangePage:(page:string)=>void,
                }

const GamePage =(props:IProps)=>{
    
   const {onChangePage} = props;
   const history = useHistory();
  
    const handleClickButton =()=>{
      history.push("/home");
    }

    const [pockemons,setPockemons] = useState([]);
    const [change,setChange] = useState(false);

    function handleCardClick(id:number):void{
      pockemons.map(([key,candidate])=>{
     
        if (candidate.id == id) 
        {               
         (candidate.isActive) ? (candidate.isActive =  false):(candidate.isActive =  true)
          
         setPockemons(prevState=>pockemons ); 
          setChange(prev=>!prev);
           writePockemonData(key,candidate);
               
        }
         }
            ); 
      
        }

    
    useEffect(()=>{
      database.ref("pokemons").once("value",(snapshot)=>{
          setPockemons(Object.entries(snapshot.val()));
          });
    },[]);
    

    const handlerClickAddPockemonToDatabase = (event:React.MouseEvent)=>{
        
        for (let pockemon of pockemons.values()){
            if (pockemon[1].isActive){
               writePockemonData(generateKey(),pockemon[1]);
            }
            
        }
     }
    
    
   
return(
        <>
    <Button click={handlerClickAddPockemonToDatabase}>ADD NEW POKEMON</Button>
    
          <div className="flex">
           { pockemons.map(([key,el])=>
            <PockemonCard
             name ={el.name}
             img = {el.img}
             id = {el.id}
             type={el.type}
             values = {el.values} 
             key={el.id}
             handleClick={handleCardClick}
             isActive = {el.isActive}
               />)})
        
        </div>
      
        <button className={s.btn} onClick={handleClickButton}>Home page</button>
       </>
    );
    
}
export default GamePage;