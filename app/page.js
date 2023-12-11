"use client"
import Home from "./Home";
import Product from "./Product";
import Clothes from "./Clothes";
import Phone from "./Phone";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";


import Footer from "./Footer"
const page=()=>{
  return(
    <div>
      <Home/><br />
      <Product/><br/>
      <Clothes/><br/>
      <Phone/>
      <Footer/><br />
    </div>

  )
}
export default page;


