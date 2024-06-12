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
        <div className="container mx-auto px-2 flex items-center justify-between">
        <div className="flex items-center w-1/2">
            <div className="w-64 h-24">
                <img src="data:image/png;base64,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" alt="logo"  className="w-full h-full "/>
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