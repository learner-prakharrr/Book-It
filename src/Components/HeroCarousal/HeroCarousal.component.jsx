
import HeroSlider from "react-slick";



import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NextArrow1, PrevArrow2} from "./Arrows.component";





const HeroCarousal = ()=> {
  
const settingsLg = {
  
  autoplay:true,
  centerMode:true,
  dots:true,
  slidesToShow: 1,
  slidesToScroll:1,
  centerPadding:"100px",
  infinite:true,
  nextArrow:<NextArrow1/>,
      prevArrow:<PrevArrow2 />
   

}


    const settings = {
      arrows:true,
      dots: true,
      infinite: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow:<NextArrow1/>,
      prevArrow:<PrevArrow2 />
    }

    const images = [
     
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1717080055549_playcardweb.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1704958137348_desklolla.jpg",
     "https://assets-in.bmscdn.com/promotions/cms/creatives/1718009496414_summerweb1240x300.jpg",
    //  "https://assets-in.bmscdn.com/promotions/cms/creatives/1705924928858_wardesk.jpg"
        
    ]

    return (
      <>
        <div className="lg:hidden">
          <HeroSlider {...settings}>
            {images.map((image, index) => (
              <div key={index} className="w-full h-64 md:h-80 py-3">
                <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
            ))}
          </HeroSlider>
        </div>
  
        <div className="hidden lg:block">
          <HeroSlider {...settingsLg}>
            {images.map((image, index) => (
              <div key={index} className="w-full h-84 px-2 py-1">
                <img src={image} alt="testing" className="w-full h-full rounded-md" />
              </div>
            ))}
          </HeroSlider>
        </div>

      </>
    );
  };
  
  export default HeroCarousal;