import React from "react";
import s from "./style.module.css";
import cn from "classnames";


interface IProps{
    title?:string,
    urlBg?:string,
    colorBg?:string,
    children?:React.ReactNode
 }

const Layout = (props:IProps)=>{
  const {title,urlBg,colorBg, children} = props;
    
    const styleLayout ={
        backgroundImage:`url(${urlBg  || ""})`,
        backgroundColor:`${colorBg || ""}`
      }
   console.log(cn(s.root,s.cards));
 
    return(
    <section className={cn(s.root,s.cards)} style={styleLayout}  >
    <div className={s.wrapper}  >
        <article>
            <div className={s.title}>
                <h3>{title}</h3>
                <span className={s.separator}></span>
            </div>
            <div className={`${s.desc} ${s.full}`}>
           {children}
            </div>
        </article>
    </div>
</section>
    );
}
export default Layout;