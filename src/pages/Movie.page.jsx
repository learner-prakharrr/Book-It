
import MovieHero from "../Components/MovieHero/MovieHero.component";
import MovieNavbar from "../Components/Navbar/movieNavbar.component";
import { Footer } from "../Components/Premier/footer.component";
import { IoTicket } from "react-icons/io5";



// styling of navbar done in movienavbar






const Movie = ()=> {
    return (
        <>
        <MovieNavbar/>
        
        <MovieHero/>


        <div  className="my-12 container mx-auto px-4 lg:w-1/2 lg:ml-36">
            <div className="flex flex-col items-start gap-3">
                <h2 className="text-gray-800 font-bold text-2xl">About The Movie</h2>
                <p className="text-semibold">Hanumanthu gets the powers of Hanuman in a distant village and fights for Anjanadri.</p>
            </div>

            <div className="my-8">
                <hr />
            </div>


            <div>
                <h1 className="text-gray-800 font-bold text-2xl my-6">Applicable Offers</h1>
              <div className="flex items-start gap-2 bg-yellow-200 border-yellow-400 border-dashed border-2 rounded-md p-3 w-96">
                <div className="w-8 h-8"><IoTicket className="h-full w-full"/></div>
                <div className="flex flex-col items-start">
                    <h3 className="text-gray-900 text-lg ">
                        Filmy Pass
                    </h3>
                    <p className="text-gray-600 font text-sm">Get 75% Off On 3 Moviees You Buy/Rent On Stream.Buy Filmy Pass @Rs.99</p>
                </div>
                
                </div>
                
            </div>
            
        </div>
        


    





        <Footer/>

    
        </>
    );
   
};


export default Movie;

