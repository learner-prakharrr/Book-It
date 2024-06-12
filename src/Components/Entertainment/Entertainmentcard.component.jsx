
import Slider from "react-slick";
import { NextArrow } from "../HeroCarousal/Arrows.component";


const EntertainmentCard = (props) => {
  return (
    <>
    <div className="w-full h-30 px-2">
    <img
      className="w-full h-full rounded-xl"
      src={props.src} alt="Entertainment Image"
     />
    </div>
    </>
  );
};

const EntertainmentCardSlider = () => {
  const EntertainmentImage = [
    
  ];

  const settings = {
    infinite: true,
    autoplay: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    InitialSlide: 0,
    nextArrow:<NextArrow/>
  }

  return (
    <>
        <Slider {...settings}>
      {EntertainmentImage.map((image, index) => (
        <EntertainmentCard key={index} src={image} />
      ))}
    </Slider>

    </>
  )
}

export default EntertainmentCardSlider;