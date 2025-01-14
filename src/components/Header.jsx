import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/godam logo.svg";
import Search from "./Search";
import { FaUserAlt } from "react-icons/fa";
import useMobile from "../hooks/useMobile";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { GoTriangleDown } from "react-icons/go";
import { GoTriangleUp } from "react-icons/go";
import { useState } from "react";
import UserMenu from "./UserMenu";

const Header = () => {
  const [isMobile] = useMobile();
  const location = useLocation();
  const isSearchPage = location.pathname === "/search";
  const navigate = useNavigate();
  const user = useSelector((state) => state?.user);
  const [openUserMenu, setOpenUserMenu] = useState(false);

  console.log("user from store", user);

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const handleCloseUserMenu = () => {
    setOpenUserMenu(false);
  };

  const handleMobileUser = ()=>{
    if(!user._id){
      navigate("/login")
      return
    }

    navigate("/user")

  }

  return (
    <header className="h-24 lg:h-20 lg:shadow-md sticky top-0 z-40 flex flex-col justify-center gap-1 bg-black">
      {!(isSearchPage && isMobile) && (
        <div className="container mx-auto flex items-center px-2 justify-between">
          {/**logo */}
          <div className="h-full">
          <Link to="/" className="-m-1.5 p-3.5">
            <span className="font-serif text-2xl text-white">Minimade</span>
          </Link>
          </div>

          {/**search */}
          <div className="hidden lg:block">
            <Search />
          </div>

          {/**log in and my cart */}
          <div className="">
            {/**user icon dispaly only in mobile version */}
            <button className="text-white lg:hidden" onClick={handleMobileUser}>
              <FaUserAlt size={25} />
            </button>

            {/**Dextop */}
            <div className="hidden lg:flex items-center gap-5">
              {user?._id ? (
                <div className="relative">
                  <div
                    onClick={() => setOpenUserMenu((preve) => !preve)}
                    className="flex select-none items-center gap-2 cursor-pointer"
                  >
                    <p>Account</p>
                    {openUserMenu ? (
                      <GoTriangleUp size={26} />
                    ) : (
                      <GoTriangleDown size={26} />
                    )}
                  </div>
                  {openUserMenu && (
                    <div className="absolute right-0 top-12">
                      <div className="bg-white rounded p-4 min-w-52 lg:shadow-lg">
                        <UserMenu close={handleCloseUserMenu} />
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={redirectToLoginPage} className="text-lg px-2">
                  {" "}
                  Login{" "}
                </button>
              )}
              <button className="flex items-center gap-2 bg-neutal-600 hover: px-3 py-3 rounded text-white">
                {/**add to card icons */}
                <div className="animate-bounce">
                  <TiShoppingCart size={28} />
                </div>
                <div className="font-semibold">
                  <p>My Cart</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="container mx-auto px-2 lg:hidden">
        <Search />
      </div>
    </header>
  );
};

export default Header;
