import React,{MouseEvent} from "react";
import Header from "components/Header";
import Layout from "components/Layout";
import PockemonCard from "components/PockemonCard";
import bg2 from "assets/bg2.jpg";
import bg3 from "assets/bg3.jpg";
import nonename from "assets/nonename.jpg";


interface IProps {
  onChangePage:(page:string)=>void,  

}

function HomePage(props:IProps) {

    const {onChangePage} = props;
    
    const handleClickButton =(page:string)=>{
    console.log("Home Page!"); 
    onChangePage && onChangePage(page);
    
    }
  
  return (
    <React.Fragment>
      <Header title="Pockemon game!" descr="My First Game!" onClickButton={handleClickButton}/>
      <Layout urlBg={bg2} title="first layout">
     <p>In the game two players face off against one another, one side playing as "blue", the other as "red" on a 3x3 grid.
Each player has five cards in a hand and the aim is to capture the opponent's cards by turning them into the player's own color of red or blue.</p>
        <p>To win, a majority of the total ten cards played (including the one card that is not placed on the board) must be of the player's card color. To do this, the player must capture cards by placing a card adjacent to an opponent's card whereupon the 'ranks' of the sides where the two cards touch will be compared. If the rank of the opponent's card is higher than the player's card, the player's card will be captured and turned into the opponent's color. If the player's rank is higher, the opponent's card will be captured and changed into the player's color instead. </p>
      </Layout>
      <Layout  colorBg="lightblue" title="second layout" urlBg={nonename} >

      </Layout>
 
      
      <Layout urlBg={bg3} title="therd layout"/>

    </React.Fragment>
  );
}

export default HomePage;
