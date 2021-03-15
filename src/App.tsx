import React,{useState} from "react";
import HomePage from "routes/Home";
import GamePage from "routes/Game";


import './App.css';



function App() {
    
    const [page, setPage] = useState('app');
    
    const handleChangePage = (page:string) =>{
        console.log("Main page");
        setPage(page);
                                        }
    

      switch(page){
      
      case("app"): return <HomePage onChangePage={handleChangePage}/>
      case("game"): return <GamePage onChangePage={handleChangePage}/>
      default: return <HomePage onChangePage={handleChangePage}/>
      
  }
  
}

export default App;

      
