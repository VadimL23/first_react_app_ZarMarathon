import React from "react";
import s from "./style.module.css";



const Layout = ({title,descr,urlBg,colorBg})=>{
   
    const styleLayout ={
        backgroundImage:`url(${urlBg  || ""})`,
        backgroundColor:`${colorBg || ""}`
        
    }
   
    return(
    <section className={s.root} style={styleLayout}>
    <div className={s.wrapper}  >
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.separator}></span>
            </div>
            <div className={s.desc.full}>
                <p>{descr}</p>
            </div>
        </article>
    </div>
</section>
    );
}
export default Layout;