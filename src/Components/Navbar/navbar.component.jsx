import { BiChevronDown, BiChevronRight,  BiSearch , BiMenu} from "react-icons/bi";


const NavSm = ()=> {
    return (
        <>

        <div className="text-black flex items-center justify-between">
            <div>
                <h3 className="text-xl font-bold">IT ALL STARTS HERE!</h3>
                
                <span className="text-gray-400 text-xs flex items-center ">Itarsi  <BiChevronRight /></span>
                
            </div>
            <div className="w-8 h-8"><BiSearch  className="w-full h-full"/></div>
            
        </div>
        </>
    )
};
const NavMd = ()=> {
    return(
        <div className=" w-full flex items-center bg-white gap-2 px-3 py-2 rounded-sm">
            <BiSearch/>
            <input type='search' className="w-full focus:outline-none " placeholder="Search For Movies,Events,Place,Sports And Activities           "/>
        </div>
    )
};
const NavLg = ()=> {
    return(
      <>
        <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center w-1/2">
            <div className="w-1/2 h-20">
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


const Navbar = () => {
    return (
        <>
        <nav className="bg-white px-5 py-3">
            <div className='md:hidden'>{
                /*MOBILE SCREEN*/
                <NavSm/>
            }</div>
            <div className='hidden lg:hidden md:flex'>{
                /*TABLET SCREEN*/
                <NavMd/>
            }</div>
            <div className='hidden lg:flex'>{
                /*DESKTOP SCREEN*/
                <NavLg/>
            }</div>
        </nav>
        </>
    )
};





export default Navbar;


export { NavSm, NavMd, NavLg };