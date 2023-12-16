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
// import App from "./App"

const page=()=>{
  return(
    <div>
      <Home/><br />
      <Product/><br/>
      <Clothes/><br/>
      <Phone/><br/>
      <Footer/><br />
      {/* <App/> */}
    </div>



  )
}
export default page;


