import { BiChevronDown,   BiSearch , BiMenu,  BiShareAlt} from "react-icons/bi";




const NavSm = ()=> {
    return (
        <>
        <div className="text-black flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold text-white">IT ALL STARTS HERE!</h3>
                
              
            </div>
            <div className="w-8 h-8 text-white"><  BiShareAlt className="w-full h-full"/></div>
            
        </div>
        </>
    )
};

const NavLg = ()=> {
    return(
      <>
        <div className="container mx-auto px-2 flex items-center justify-between">
        <div className="flex items-center w-1/2">
        <div className="w-1/2 h-20 mt-2">
                <img src="/booooook.jpeg" alt="logo"  className="w-full h-full "/>

            </div>
            <div className=" w-full flex items-center bg-gray gap-2 px-3 py-2 rounded-sm ">
            <BiSearch />
            <input type="search"  placeholder="Search For Movies,Events,Plays,Sports And Activities"
      className=" w-full h-full"  style={{ color: 'gray', border: '1px solid gray', borderRadius: '1px', padding: '6px' }}
    />
        </div>
            
        </div>
       






        <div className="flex items-center gap-3" >
        <span className="text-black text-xs flex items-center hover:text-gray cursor-pointer ">Itarsi  <BiChevronDown /></span>
        <button className="bg-red-700 text-white tex-sm rounded px-2 py-1 ">
            Sign In

        </button>
        <div className="w-8 h-8 text-black"><BiMenu className="w-full h-full"/></div>

        </div>
        
    </div>
    
      </>
    )
};
//


const MovieNavbar = () => {
    return (
        <>
        <nav className="absolute inset-x-0 z-30 bg-opacity-10 backdrop-filter backdrop-blur-lg lg:relative bg-white  px-5 py-1">
            <div className='md:hidden'>{
                /*MOBILE SCREEN*/
                <NavSm/>
            }</div>
            <div className='hidden lg:hidden md:block'>{
                /*TABLET SCREEN*/
                <NavSm/>
            }</div>
            <div className='hidden lg:flex bg-white'>{
                /*DESKTOP SCREEN*/
                <NavLg/>
            }</div>
        </nav>
        </>
    )
};





export default MovieNavbar;


