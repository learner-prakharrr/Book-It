import { BiChevronRight } from "react-icons/bi";
import { TiStarFullOutline } from "react-icons/ti";


const launchRazoyPay =() => {
  const options ={
      key : "rzp_test_kUiJb4LR35eegR",
      amount:499*100,
      currency:"INR",
      description:"Movie Purchase On Retail",
      Image:"https://www.confirmtkt.com/img/home/icons/ic-web-confirm-ticket@3x.png",
      handler:() => {
          alert("Payment Done")
      },
      theme:{color: "#c4242d"}
  };
  let rzp = new window.Razorpay(options);
  rzp.open()
};





const MovieHero =()=>{
    return(
        <>
        <div className="md:hidden">
            <img src="https://www.bollywooddhamaka.in/wp-content/uploads/2021/05/29.5.9-1000x600.jpg" alt="Background" />
        </div>




        <div className="hidden md:block lg:hidden">
        <img src="https://www.bollywooddhamaka.in/wp-content/uploads/2021/05/29.5.9-1000x600.jpg" alt="Background" />
        </div>




        <div className="relative hidden lg:block" style={{ height: "30rem" }}>
  <div className="absolute h-full w-full z-10"
    style={{ backgroundImage: "linear-gradient(90deg, rgb(26, 26, 26) 24.97%, rgb(26, 26, 26) 38.3%, rgba(26, 26, 26, 0.04) 97.47%, rgb(26, 26, 26) 100%)" }}
  />



  <div className="absolute z-30 w-64 h-96 left-40 top-8">
    <img src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hanu-man-et00311673-1704954533.jpg" alt="Poster" className="h-full w-full rounded-xl" />
  </div>



  <div className="absolute z-10 left-64 py-10 px-48 w-64 h-64">
    <h1 className="text-white w-full h-full font-bold text-3xl whitespace-nowrap"> HANU-MAN</h1>
  </div>



  <div className="absolute z-10 left-64 py-28 px-48 w-64 h-64 flex items-center ">
    <h1 className="text-white font-semibold text-2xl whitespace-nowrap flex items-center ">
      <TiStarFullOutline className="mr-2" style={{ color: 'red' }}  />9.5/10
    </h1>
    <span className="text-white text-sm font-semibold items-center ml-2 py-2 whitespace-nowrap">353.8K VOTES</span>
    <span className="text-white text-sm items-center ml-2 py-2"><BiChevronRight /></span>
  </div>



  <div className="absolute z-10 left-64 py-40 px-48 ">
  <div className="w-full h-full">
    <h1 className="text-white font-semibold text-lg whitespace-nowrap hover:text-gray cursor-pointer "> Add your Ratings & Review</h1>
    <span className="text-white text-sm  items-center  py-2 whitespace-nowrap  font-semibold hover:text-gray cursor-pointer ">Your ratings matter</span>

    </div>
    <div className="absolute bg-white text-navCol-200 text-md rounded-md items-center px-4 py-2 font-bold right-40 top-[170px]">
  <button>Rate Now</button>
</div>











<div className="flex gap-2 mt-8">
    <div className="bg-gray-100 rounded-sm  py-2 mt-4">
    <h1 className=" ml-3 font-semibold text-sm w-full mr-2">2D ,ICE</h1>
    </div>

    <div className="bg-gray-100 rounded-sm  py-2 mt-4" >
    <h1 className=" ml-3 font-medium text-sm w-full mr-2">Telugu, Hindi, Malyalam, Kannada, Tamil</h1>
    </div>


    
    
    </div>





<div className="text-gray-100 mt-4">
  <h1>2h 28m . Action,Adventure,Fantasy . UA . 12 Jan, 2024</h1>
</div>


<div onClick={launchRazoyPay} className="bg-red-500 py-1 mt-4 w-1/2 rounded-md cursor-pointer ">
  <button  className="text-white text-md font-semibold ml-12 my-2">Book Tickets</button></div>

    
</div>





  <img src="https://www.bollywooddhamaka.in/wp-content/uploads/2021/05/29.5.9-1000x600.jpg" alt="Background"
    className="w-full h-full" />
</div>


        </>
    )
};

export default MovieHero;


