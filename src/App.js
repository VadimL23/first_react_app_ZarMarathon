import React from "react";
//import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import bg2 from "./assets/bg2.jpg";
import bg3 from "./assets/bg3.jpg";


function App() {
    console.log(`${bg2}`);
  return (
    <React.Fragment>
      <Header title="Pockemon game!" descr="My First Game!"/>
      <Layout urlBg={bg2} title="first layout"/>
      <Layout colorBg="lightblue" title="second layout" descr="Hello pockemon!"/>
      <Layout urlBg={bg3} title="therd layout"/>
      <Footer />
      
      </React.Fragment>
  );
}

export default App;

      
