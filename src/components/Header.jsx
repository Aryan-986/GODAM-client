
import { Link, useLocation,useNavigate } from 'react-router-dom';
import logo from '../assets/godam logo.svg'
import Search from './Search';
import { FaUserAlt } from "react-icons/fa";
import useMobile from '../hooks/useMobile';
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  const [ isMobile ] = useMobile()
    const location = useLocation()
    const isSearchPage = location.pathname === "/search"
    const navigate = useNavigate()

    const redirectToLoginPage = ()=>{
        navigate("/login")
    }


    return (
        <header className='h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-white'>
          {
            !(isSearchPage && isMobile) && (
              <div className='container mx-auto flex items-center px-2 justify-between'>
              {/**logo */}
              <div className='h-full'>
                  <Link to = {"/"}className = 'h-full flex justify-center items-center'>
                      <img
                      src={logo}
                      width={170}
                      height={60}
                      alt="logo"
                      className='hidden lg:block'
                      />
                   <img
                      src={logo}
                      width={120}
                      height={60}
                      alt="logo"
                      className='lg:hidden'
                      />
                  </Link>
              </div>
      
               {/**search */}
               <div className="hidden lg:block">
                  <Search/>
               </div>
      
      
                {/**log in and my cart */}
                <div className=''>
                  {/**user icon dispaly only in mobile version */}
                  <button className='lg:hidden'>
                  <FaUserAlt size={25} />
                  </button>

                  {/**Dextop */}
                  <div className='hidden lg:flex items-center gap-5'>
                      <button onClick={redirectToLoginPage} className='text-lg px-2' > Login </button>
                      <button className='flex items-center gap-2 bg-black hover: px-3 py-3 rounded text-white'>
                        {/**add to card icons */}
                        <div className = 'animate-bounce'>
                        <TiShoppingCart size={28}/>
                        </div>
                        <div className='font-semibold'>
                          <p>My Cart</p>
                        </div>
                      </button>
                  </div>
                </div>
      
          </div>
            )
          }
      
    <div className='container mx-auto px-2 lg:hidden'>
        <Search/>
    </div>
        
      </header>
    );
  };
  
  export default Header;
  