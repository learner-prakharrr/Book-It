

import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnePage from "../1Page/OnePage";
import Movie from "../../pages/Movie.page";
import Events from "../../pages/Events.page";








const AllLayout =()=> {


    return( 

        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<OnePage/>}/>
            <Route path="/Movie" element={<Movie/>}/>
            <Route path="/Events" element={<Events/>}/>
        </Routes>
        </BrowserRouter>
    
       
           
        </>
        
    );
};

export default AllLayout;