"use client"
// import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Clothes from "./Clothes";
import Phone from "./Phone";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
import "./globals.css";
// import Data from "./data.js"
// import BooksPage from "./Books/page";
import Footer from "./Footer"

const page=()=>{
  return(
    <div>
      {/* <Navbar/><br /> */}
      <Home/><br />
      <Product/><br/>
      <Clothes/><br/>
      <Phone/><br/>
      <Footer/><br />
    </div>



  )
}
export default page;


