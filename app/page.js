"use client"
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Phone from "./Phone";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import Electronices from "./Electronices"
import "./globals.css";

import Footer from "./Footer"
const page=()=>{
  return(
    <div>
      <Navbar/><br />
      <Home/><br />
      <Product/><br/>
      <Phone/><br/>
      <Electronices/><br/>
      <Footer/><br />
    </div>

  )
}
export default page;


