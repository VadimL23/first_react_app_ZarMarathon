import React,{Component} from "react";
import s from "./style.module.css";

export default class Footer extends Component{
    
    render(){
        return(
        <footer>
    <div className={s.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
    </div>
            </footer>
        );
    }
    
}

