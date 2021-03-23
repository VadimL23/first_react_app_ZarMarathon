import React, {useState, useEffect, useContext} from "react";
import s from "./style.module.css";
import {useHistory} from "react-router-dom";
//import FireBase,{writePockemonData, generateKey} from "service/firebase";
import FireBase from "service/firebase";
import {FireBaseContext} from "context/firebaseContext";
import {PockemonContext} from "context/pockemonContext";
import { Switch, Route, useRouteMatch, Redirect} from "react-router-dom";


import StartPage from "routes/Game/routes/Start";
import BoardPage from "routes/Game/routes/Board";
import FinishPage from "routes/Game/routes/Finish";

import {IPockemon} from "components/PockemonCard";




 const GamePage = () => {
    
    const [pockemon, setPockemon] = useState([]);
    
    const setPockemonToContext = (P:IPockemon[]) =>{    
        setPockemon((Prev)=>P);
        
}
    
    
    const match = useRouteMatch();
    return (
        <PockemonContext.Provider value={{pockemon:[],setPockemonToContext}}>
        <Switch>
            <Route path={`${match.path}/`} exact component={StartPage} />
            <Route path={`${match.path}/board`} component={BoardPage} />
            <Route path={`${match.path}/finish`} component={FinishPage} />
        </Switch>
        </PockemonContext.Provider>
    );
};

export default GamePage;