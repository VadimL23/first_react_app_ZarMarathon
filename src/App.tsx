import React,{useState} from "react";
import { Switch, Route, useRouteMatch, Redirect} from "react-router-dom";
import HomePage from "routes/Home";
import GamePage from "routes/Game";
import Footer from "components/Footer";
import MenuHeader from "components/MenuHeader";
import cn from "classnames";
import s from './App.module.css';
import "./App.css";



function App() {
    
const [page, setPage] = useState('app');
 
   const match = useRouteMatch('/');
   const handleChangePage = (page:string) =>{
                                setPage(page);
                                        }


    return(
<Switch>
       <Route path="/404"  render={()=>{
                   return(<h1>404 Not found</h1>);
                  }} />
                  
        <>
        <MenuHeader bgActive = {(!match.isExact )}/>
        <div className={cn(s.wrap,{[s.isHomePage]:match.isExact})}>
        <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route path="/game" component={GamePage} />
        <Route path="/about"  render={()=>{
                   return(<h1>This page about</h1>)
                  }} />
                  
            <Route render={()=>(
                <Redirect to = "/404" />
                
                )}/>
                          
       
        
        </Switch>
        </div>
        
       <Footer />
        </>
     
        </Switch>
    )
    
   
  
};

export default App;

      
