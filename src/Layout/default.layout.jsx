// import { Route, Routes } from "react-router-dom"
import HeroCarousal from "../Components/HeroCarousal/HeroCarousal.component";
import Navbar from "../Components/Navbar/navbar.component";



const DefaultLayout =()=> {


    return( 

        <>
        <Navbar/>
        <HeroCarousal/>  
       
          
        </>
        
    );
};

export default DefaultLayout;