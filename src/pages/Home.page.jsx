import EntertainmentCardSlider from "../Components/Entertainment/Entertainmentcard.component";
import { Premier, PremierBlack, PremierEvents, PremierGame, PremierLaughter, PremierMusic, PremierOutdoor } from "../Components/Premier/Premier.component";
import { Footer } from "../Components/Premier/footer.component";





EntertainmentCardSlider
 const HomePage=()=> {
    return (
        <>
        
        <div className="container mx-auto px-24 py-12 ">
            <h1 className="text-2xl font-bold text-gray-800">Recommended Movies</h1>
            <br />
            <Premier/>



            <br />
{/*            
        <h1 className="text-2xl font-bold text-gray-800">Promotion</h1>
        <br />
        <EntertainmentCardSlider/> */}
        
        

        </div>
        <br />






        <div className="bg-navCol-200 py-10">
  <div className="flex flex-col items-center sm:flex-row sm:px-4">
    <img
      src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120/premiere-banner-web-collection-202208191200.png"
      alt="rupay"
      className="w-full sm:w-auto max-w-full"
    />
  </div>

  <div className="container mx-auto px-4 sm:px-40 py-4 ">
    <PremierBlack />
  </div>
</div>





        <div className="container mx-auto px-24 py-20">
            <h1 className="text-2xl font-bold text-gray-800  ">Your Music Studio</h1>
            <br />
            <PremierMusic/>
            </div>




    
        <div className="container mx-auto px-24 py-2">
            <h1 className="text-2xl font-bold text-gray-800  ">Outdoor Events</h1>
            <br />
            <PremierOutdoor/>
            </div>
            

    
       <div className="container mx-auto px-24 py-12">
          <h1 className="text-2xl font-bold text-gray-800  ">Laughter Therapy</h1>
            <br />
            <PremierLaughter/>
            </div>

      <div className="container mx-auto px-24 py-12">
            <h1 className="text-2xl font-bold text-gray-800  ">Popular Events</h1>
            <br />
            <PremierEvents/>
            </div> 

     <div className="container mx-auto px-24 py-12">
            <h1 className="text-2xl font-bold text-gray-800  ">Top Games & Sports Events</h1>
            <br />
            <PremierGame/>
            </div> 

        <div><Footer/> </div>
        </>

        
    );
}
export default HomePage;