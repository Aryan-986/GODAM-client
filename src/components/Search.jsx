import { IoSearch } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";
import { useLocation, useNavigate } from "react-router-dom"; // Ensure proper import
import { useEffect, useState } from "react";

const Search = () => {
  const navigate = useNavigate();
  const location = useLocation()
  const [isSearchPage, setIsSearchPage] = useState(false)

  useEffect(()=>{
    const isSearch = location.pathname === "/search"
    setIsSearchPage(isSearch)
  },[location])



  const redirectToSearchPage = () => {
    navigate("/search");
  };

    console.log("search", isSearchPage)

  return (
    <div className="group w-full min-w-[300px] lg:min-w-[420px] h:11 lg:h-12 rounded-lg border overflow-hidden flex items-center text-neutral-500 bg-slate-50 group focus-within:border-primary-200">
      {/* Search Icon Button */}
      <button
        className="flex justify-center items-center h-full p-3"
        onClick={redirectToSearchPage} // Attach the onClick handler here
      >
        <IoSearch size={22} />
      </button>
      <div className ='w-full h-full'>
            {
                !isSearchPage ? (
                    //when user is not in search page
                    <div className="flex-1 px-3 cursor-pointer w-full h-full flex items-center" onClick={redirectToSearchPage}>
                    <TypeAnimation
                      sequence={[
                        "Search for Sneakers",
                        1000,
                        "Search for Hoodies",
                        1000,
                        "Search for Track Suits",
                        1000,
                        "Search for Cultural Dress",
                        1000,
                        "Search for Formal Shoes",
                        1000,
                        "Search for T-shirts",
                        1000,
                        "Search for Pants",
                        1000,
                        "Search for Pajamas",
                        1000,
                        "Search for Jackets",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      repeat={Infinity}
                    />
                  </div>
                ) : (
                    //when user is in search page
                    <div className='w-full h-full'>
                        <input
                            type = 'text'
                            placeholder="search for jeans cloths and more"
                            autoFocus
                            className="bg-transparent w-full h-full outline-none"
                        />
                        </div>
                )
            }
      </div>
      {/* Animated Search Text */}
 
    </div>
  );
};

export default Search;
