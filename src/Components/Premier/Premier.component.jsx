import Slider from "react-slick";
// component
import Poster from "../Poster/poster.component";
import { NextArrow, PrevArrow } from "../HeroCarousal/Arrows.component";






export const Premier =()=> {
    const settings = {
        infinite: true,
        autoplay: false,
        slidesToShow: 5,
        slidesToScroll:5,
        InitialSlide: 0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/> ,
        responsive: [
          {
            breakpoint:1024,
            settings:{
              slidesToShow:3,
              slidesToScroll:3,
            
            }
          },
          
          {
            breakpoint:600,
            settings:{
              slidesToShow:2,
              slidesToScroll:2,
            
            }
          },

          {
            breakpoint:400,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
            
            }
          },
        ]


    };

    const PremierImages = [
       {
        src: "https://tse3.mm.bing.net/th?id=OIP.yPtJ-uYz5GQUvf45_MtpbQAAAA&pid=Api&P=0&h=180https://juksun.com/wp-content/uploads/2023/02/Hanuman-Movie-Poster.jpg",
        alt: "Hanuman" ,
        title:"Hanu-Man",
        subtitle:"Action,Adventure,Fantasy" },

      {
            src: "https://image.tmdb.org/t/p/original/zDZowwb9GZGEctAu2PCpjiPQAMM.jpg",
            alt: "Fighter" ,
            title:"Fighter",
            subtitle:"Action,Thriller" },

       {
        src: "https://juksun.com/wp-content/uploads/2023/03/Main-Atal-Hoon-Movie-Poster-2.jpg",
        alt: "Atal" ,
        title:"Main Atal Hoon",
        subtitle:"Biography,Drama" },

        {
          src: "https://media-cache.cinematerial.com/p/500x/orcw9jmq/salaar-indian-movie-poster.jpg?v=1660561960https://image.tmdb.org/t/p/original/cDWW5l4NTWtQi9McwevrY3knsTd.jpg",
          alt: "Salaar" ,
          title:"Salaar",
          subtitle:"Action,Thriller" },

        {
            src: "https://image.tmdb.org/t/p/original/cDWW5l4NTWtQi9McwevrY3knsTd.jpg",
            alt: "12th Fail" ,
            title:"12th Fail",
            subtitle:"Drama" },

       {
        src: "https://www.filmibeat.com/ph-big/2023/01/animal-2023_167264941510.jpg",
        alt: "Animal" ,
        title:"Animal",
        subtitle:"Action,Crime,Drama" },

      

        {
         src: "https://www.businessoftollywood.com/wp-content/uploads/2023/11/IMG-20231104-WA0012-1-768x960.jpg",
            alt: "Dunki" ,
            title:"Dunki",
            subtitle:"Comedy,Drama" },

        {
          src: "https://stat4.bollywoodhungama.in/wp-content/uploads/2024/01/695-poster-1-306x393.jpeg",
                 alt: "695" ,
                 title:"6 9 5",
                 subtitle:"Drama" },


        {
          src: "https://image.tmdb.org/t/p/original/re8svGBwBUtQzQ76Crk1gDYIhcX.jpg",
                                alt: "Night Swim" ,
                                title:"Night Swim",
                                subtitle:"Horror/Thriller" },
              {
            src: "https://www.ageofthenerd.com/wp-content/uploads/2023/11/the-beekeeper-TheBeekeeper_IMAX-Poster_rgb-1.jpg",
                                                        alt: "Bee" ,
                                                        title:"The Beekeeper",
                                                        subtitle:"Horror/Thriller" },

                           

                         
        

  

          
       

    
    ]
    

    return (
        <>
      <Slider {...settings}>
    {PremierImages.map((image, index) => (
      <Poster key={index} {...image} />
    ))}
  </Slider>
        </>
    )
};













export const PremierBlack =()=> {
    const settings = {
        arrows : true,
        infinite: true,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        InitialSlide: 0,
        nextArrow:<NextArrow/>,
        prevArrow:<PrevArrow/>,
        responsive: [
          {
            breakpoint:1024,
            settings:{
              slidesToShow:3,
              slidesToScroll:3,
            
            }
          },
          
          {
            breakpoint:600,
            settings:{
              slidesToShow:2,
              slidesToScroll:2,
            
            }
          },

          {
            breakpoint:400,
            settings:{
              slidesToShow:1,
              slidesToScroll:1,
            
            }
          },
        ]
      
        

    };

    const PremierImages = [
       {
        src: "https://cdn.traileraddict.com/content/cj-entertainment/the-target-korean.jpg",
        alt: "Target" ,
        title:"Target(Korean)",
        subtitle:"Korean" },

      {
            src: "https://cinepoint.in/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-11-at-17.35.52-768x1187.jpeg",
            alt: "Harkara" ,
            title:"Harkara",
            subtitle:"Tamil" },

       {
        src: "https://theartsshelf.com/wp-content/uploads/2023/07/GB_UK_WONKA_VERT_TSR_2764x4096_INTL-scaled.jpg",
        alt: "Wonka" ,
        title:"Wonka",
        subtitle:"English" },

        {
            src: "https://media-cache.cinematerial.com/p/500x/kcxlimgs/journey-to-bethlehem-movie-poster.jpg?v=1702601241",
            alt: "Journey To Bethehem" ,
            title:"Journey To Bethehem",
            subtitle:"English" },

       {
        src: "https://resizing.flixster.com/KdBgvhqMfDgKo6FRAN2WVaOBC3A=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzU0NTg1NzA4LWNmNTctNDg1YS05MzcwLWQwYjZmNzg5MGIxZS5qcGc=",
        alt: "The Communication Girl" ,
        title:"The Communication Girl",
        subtitle:"Spanish" },


       {
        src: "https://m.media-amazon.com/images/M/MV5BZWFkMjBmZmYtMzk2MS00NzRlLWI5MzgtNjkwZmQyMGMwOWQxXkEyXkFqcGdeQXVyODA0MjgyNzM@._V1_FMjpg_UX1000_.jpg",
        alt: "The Holy Spider" ,
        title:"The Holy Spider",
        subtitle:"Persian" },
       

    
    ]

    return (
        <>
        <div className="flex flex-col items-start py-4">
            <h1 className="text-white text-xl font-bold">Premiers</h1>
            <p  className="text-white text-sm  font-bold">Brand New Release Every Friday</p>
        </div>
      <Slider {...settings}>
    {PremierImages.map((image, index) => (
      <Poster key={index} {...image} isDark/>
    ))}
  </Slider>
        </>
    )
};




//////////////////////////////////////////////////////////






export const PremierMusic =()=> {
  const settings = {
      arrows : true,
      infinite: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      InitialSlide: 0,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
      responsive: [
        {
          breakpoint:1024,
          settings:{
            slidesToShow:3,
            slidesToScroll:3,
          
          }
        },
        
        {
          breakpoint:600,
          settings:{
            slidesToShow:2,
            slidesToScroll:2,
          
          }
        },

        {
          breakpoint:400,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          
          }
        },
      ]

  };

  const PremierImages = [
     {
      src: "https://m.media-amazon.com/images/M/MV5BZjc3MzFkMjgtN2EwMi00MjEyLWJhZTQtOTZlZGFiZGVmNDA1XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg",
      alt: "Award" ,
      title:"69th Hyundai filmfare Awards With Gujraat... ",
      subtitle:"Multiple Venues Concert" },

    {
          src: "https://i.etsystatic.com/25143542/r/il/4b0990/5001222961/il_570xN.5001222961_w6o0.jpg",
          alt: "swift" ,
          title:"Swiftie's Eve",
          subtitle:"Latitute Cafe And Restro: Bhopal" },

          
        {
          src: "https://lifestylesofmumbai.wordpress.com/wp-content/uploads/2024/01/curtain-raiser-of-the-69th-hyundai-filmfare-awards-2024-with-gujarat-tourism-1.jpg?w=529",
          alt: "Award" ,
          title:"69th Hyundai filmfare Awards With Gujraat... ",
          subtitle:"Multiple Venues Concert" },


     {
      src: "https://i.pinimg.com/736x/e7/85/b6/e785b62d3aa153a782885290e718e8c1.jpg",
      alt: "Ed sheron" ,
      title:"ED Sheeran +_=Tour",
      subtitle:"Mumbai Race Course" },

      {
          src: "https://m.media-amazon.com/images/M/MV5BZjc3MzFkMjgtN2EwMi00MjEyLWJhZTQtOTZlZGFiZGVmNDA1XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg",
          alt: "Cutain" ,
          title:"Curtain Raiser Filmfare Award 2024",
          subtitle:"Exhibition Centre Concerts" },

     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi3ug6cqdGXzMMth5bPVHTxD3k6NiS7YP43g&s",
      alt: "Bangalore" ,
      title:"Open Bangalore Air 2024",
      subtitle:"Bits Club:Bangalore" },

   

        
      {
        src: "https://img.freepik.com/free-vector/flat-design-open-mic-poster-design_23-2149460736.jpg",
        alt: "Award" ,
        title:"Open Mic/Music  ",
        subtitle:"Bhopal" },
     

  
  ]

  return (
      <>
      <div className="flex flex-col items-start ">
      
      </div>
    <Slider {...settings}>
  {PremierImages.map((image, index) => (
    <Poster key={index} {...image} />
  ))}
</Slider>
      </>
  )
};





export const PremierOutdoor =()=> {
  const settings = {
      arrows : true,
      infinite: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      InitialSlide: 0,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
      responsive: [
        {
          breakpoint:1024,
          settings:{
            slidesToShow:3,
            slidesToScroll:3,
          
          }
        },
        
        {
          breakpoint:600,
          settings:{
            slidesToShow:2,
            slidesToScroll:2,
          
          }
        },

        {
          breakpoint:400,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          
          }
        },
      ]
      
      

  };

  const PremierImages = [
     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5AGNm28lBH5l4uVnkJKKQR5ogXIpWOv96ag&s",
      alt: "Jazbaat" ,
      title:"JustBaat Nahi Jazbaat ",
      subtitle:"The Ten Suits:Bhopal" },

    {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvkNHshwMb5psPDT62ROvRPlxrjgeZt0KvRg&s",
          alt: "Yahya" ,
          title:"Yahya Bootwala's Dialoguebaaz",
          subtitle:"Hotel La-Pearl , Bhopal" },

          
          {
            src: "https://m.media-amazon.com/images/M/MV5BZjc3MzFkMjgtN2EwMi00MjEyLWJhZTQtOTZlZGFiZGVmNDA1XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_FMjpg_UX1000_.jpg",
            alt: "Award" ,
            title:"69th Hyundai filmfare Awards With Gujraat... ",
            subtitle:"Multiple Venues Concert" },
      


     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRex1IsPwdM7JM4Ew7Vdx-5hC1noKR-umOvTQ&s",
      alt: "Pankh" ,
      title:"Pankh MP Marathon",
      subtitle:"Tatya Tope Stadium:hopal" },

      {
          src: "https://in.bmscdn.com/events/moviecard/ET00329412.jpg",
          alt: "Kal ki chinta" ,
          title:"Kal Ki Chinta Nahi Karta Ft. Ravi Gupta",
          subtitle:"Hotel la-pearl:Bhopal" },

     {
      src: "https://in.bmscdn.com/events/moviecard/ET00383732.jpg",
      alt: "Bassi" ,
      title:"Kisi Ko Btana Nahi Ft. Bassi",
      subtitle:"Deep Smriti Auditorium:Jaipur" },

   

        
      {
        src: "https://in.bmscdn.com/events/moviecard/ET00325297.jpg",
        alt: "abhishek upmanyu" ,
        title:"Abhishek Upmanyu Live",
        subtitle:"Bhopal" },
     

  
  ]

  return (
      <>
      <div className="flex flex-col items-start ">
      
      </div>
    <Slider {...settings}>
  {PremierImages.map((image, index) => (
    <Poster key={index} {...image} />
  ))}
</Slider>
      </>
  )
};






export const PremierLaughter =()=> {
  const settings = {
      arrows : true,
      // prevArrow:false,
      infinite: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      InitialSlide: 0,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
      responsive: [
        {
          breakpoint:1024,
          settings:{
            slidesToShow:3,
            slidesToScroll:3,
          
          }
        },
        
        {
          breakpoint:600,
          settings:{
            slidesToShow:2,
            slidesToScroll:2,
          
          }
        },

        {
          breakpoint:400,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          
          }
        },
      ]
      
      

  };

  const PremierImages = [
     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb_npLDkQ9A8eWUaORaH3aCDo2ui8dUOYU3g&s",
      alt: "Pannu" ,
      title:"Yaar Pannu! Ft. Gurleen Pannu ",
      subtitle:"Bhopal" },

    {
          src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpD4joZIC4aLWmvfj_mJyq0scC1Xbo0-tXEw&s",
          alt: "Nakaam Ishq" ,
          title:"Nakaam Ishq Ft. Kanha Kamboj",
          subtitle:"Lalghati:Bhopal" },

          
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDGLrqry__ZjeuW5ShOSaoyCjiOM1__f8GQg&s",
            alt: "Roy" ,
            title:"Premium Roy Ft.Shreya Priyam Roy ",
            subtitle:"Hotel La-Pearl :Bhopal" },
      


     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQExHZLNb6z5naZkCOK8TMTQDzKLhzPuGTR_g&s",
      alt: "With Love" ,
      title:"With Love,Jaspreet!!",
      subtitle:"Venue to be announced:Bhopal" },

      {
          src: "https://i.pinimg.com/originals/c7/03/b3/c703b318ffa7e602d869e77952d9a6bd.jpg",
          alt: "habitat" ,
          title:"The Habitat",
          subtitle:"Multiple Venues " },

     {
      src: "https://i.etsystatic.com/24026033/r/il/57aaf3/3173150908/il_570xN.3173150908_7yqk.jpg",
      alt: "Sober" ,
      title:"Sober",
      subtitle:"Hotel La-Pearl:Bhopal" },

   

        
      {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312421-nwrltqptjp-portrait.jpg",
        alt: "OML" ,
        title:"OML Comedy Pit Shop",
        subtitle:"Multiple Venues" },
     

  
  ]

  return (
      <>
      <div className="flex flex-col items-start ">
      
      </div>
    <Slider {...settings}>
  {PremierImages.map((image, index) => (
    <Poster key={index} {...image} />
  ))}
</Slider>
      </>
  )
};





export const PremierEvents =()=> {
  const settings = {
      arrows : true,
      // prevArrow:false,
      infinite: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      InitialSlide: 0,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
      responsive: [
        {
          breakpoint:1024,
          settings:{
            slidesToShow:3,
            slidesToScroll:3,
          
          }
        },
        
        {
          breakpoint:600,
          settings:{
            slidesToShow:2,
            slidesToScroll:2,
          
          }
        },

        {
          breakpoint:400,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          
          }
        },
      ]
      
      

  };

  const PremierImages = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2CMEa7OVKyu9EDFxsF9H9HkRcc2zpehNYIw&s",
      alt: "Award" ,
      title:"69th Hyundai filmfare Awards With Gujraat... ",
      subtitle:"Multiple Venues Concert" },

    {
          src: "https://static.wixstatic.com/media/76b3d3_fbe29b1819c74a4ba81f76c6c107bd1e~mv2.jpg/v1/fill/w_980,h_1386,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/76b3d3_fbe29b1819c74a4ba81f76c6c107bd1e~mv2.jpg",
          alt: "Soduku" ,
          title:"Kids Sodoku Championship By Malsar",
          subtitle:"Watch On Zoom" },

          
          {
            src: "https://rukminim2.flixcart.com/image/850/1000/xif0q/poster/h/3/k/small-focus-on-your-goals-wall-d-cor-poster-ank6-allen-turtle-original-imagsrmpwrjgxerz.jpeg?q=90&crop=false",
            alt: "Focusing" ,
            title:"Focusing- The First Primary Goal ",
            subtitle:"Ameenpur Lake: Hyderabad" },
      


     {
      src: "https://azfamilygifts.com/cdn/shop/products/regular_bca23736-4db8-45d6-9e08-cb811a6b9a66_1280x.jpg?v=1591260837",
      alt: "Exposure Math" ,
      title:"Exposure Math- Capture Any Photography Genre",
      subtitle:"Ameenpur Lake: Hyderabad" },

      {
          src: "https://img.freepik.com/free-vector/flat-chef-vertical-poster-template_23-2149890864.jpg",
          alt: "Copy" ,
          title:"Talk Session In Culinary Arts",
          subtitle:"Watch On Zoom" },

     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxKgGa5rMuuaBO9CMs9DauWlB_SpyWxn1Wpw&s",
      alt: "Rhyme" ,
      title:"Magic Beans",
      subtitle:"Magic Beans,Kemps Corner:Bhopal" },

   

        
      {
        src: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00312421-nwrltqptjp-portrait.jpg",
        alt: "OML" ,
        title:"OML Comedy Pit Shop",
        subtitle:"Multiple Venues" },
     

  
  ]

  return (
      <>
      <div className="flex flex-col items-start ">
      
      </div>
    <Slider {...settings}>
  {PremierImages.map((image, index) => (
    <Poster key={index} {...image} />
  ))}
</Slider>
      </>
  )
};





export const PremierGame =()=> {
  const settings = {
      arrows : true,
      // prevArrow:false,
      infinite: true,
      autoplay: false,
      slidesToShow: 5,
      slidesToScroll: 1,
      InitialSlide: 0,
      nextArrow:<NextArrow/>,
      prevArrow:<PrevArrow/>,
      responsive: [
        {
          breakpoint:1024,
          settings:{
            slidesToShow:3,
            slidesToScroll:3,
          
          }
        },
        
        {
          breakpoint:600,
          settings:{
            slidesToShow:2,
            slidesToScroll:2,
          
          }
        },

        {
          breakpoint:400,
          settings:{
            slidesToShow:1,
            slidesToScroll:1,
          
          }
        },
      ]
      
      

  };

  const PremierImages = [
    {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK8GlMnKkc3zXS8BhSwhKgnwTr3nYozgdbjw&s",
      alt: "Game" ,
      title:"Fit India Virtual Marathon ",
      subtitle:"Your Place & Your Time, India" },

    {
          src: "https://static.wixstatic.com/media/76b3d3_fbe29b1819c74a4ba81f76c6c107bd1e~mv2.jpg/v1/fill/w_980,h_1386,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/76b3d3_fbe29b1819c74a4ba81f76c6c107bd1e~mv2.jpg",
          alt: "sodoku" ,
          title:"Samurai Soduku Championship ",
          subtitle:"Watch On Zoom" },

          
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-av4Ns3YEuz4mlombdImeawKgsZ_01WO9JA&s",
            alt:"International" ,
            title:"International Marathon 2024 ",
            subtitle:"Your pace & Your Time ,India" },
      


     {
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVfLF-XxEp79_golfAZfxx4UzWMfoV-iXGtw&s",
      alt: "Ceat" ,
      title:"Ceat Indian Supercross Racing League 2024",
      subtitle:"Pune" },

      {
          src: "https://race-registration-cdn.indiarunning.com/events/2024/02/11/pankh-mp-marathon--2024/banner-mobile1700465899056.jpeg",
          alt: "Pankh" ,
          title:"Pankh MP Marathon",
          subtitle:"Tatya Tope Stadium Bhopal" },

  
     

  
  ]

  return (
      <>
      <div className="flex flex-col items-start ">
      
      </div>
    <Slider {...settings}>
  {PremierImages.map((image, index) => (
    <Poster key={index} {...image} />
  ))}
</Slider>
      </>
  )
};




