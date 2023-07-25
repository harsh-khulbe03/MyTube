import React, { useEffect, useState } from "react";
import menu from "../assets/images/menu.png";
import logo from "../assets/images/logo.png";
import user from "../assets/images/user.png";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/contants";
import { cacheResults } from "../utils/searchSlice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);
  console.log(searchCache);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    console.log(searchQuery);
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={() => toggleMenuHandler()}
          alt="menu"
          src={menu}
          className="h-8 w-9 m-3 cursor-pointer"
        />
        <a href="/">
          <img alt="logo" src={logo} className="h-8 w-32 m-4" />
        </a>
      </div>

      <div className="m-3 col-span-10">
        <div>
          <input
            type="text"
            className="border-2 py-2 pl-4 border-gray-300 w-1/2 ml-32 rounded-l-full outline-none"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 p-2 rounded-r-full px-4">
            <i class="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        {showSuggestions && (
          <div className="fixed bg-white px-5 w-[34rem] ml-32 rounded-lg shadow-lg">
            <ul>
              {suggestions.map((s) => (
                <li className="py-2 shadow-sm hover:bg-gray-100" key={s}>
                  <i class="fa-solid fa-magnifying-glass"></i> {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="col-span-1">
        <img alt="user" src={user} className="h-8 w-9 m-4" />
      </div>
    </div>
  );
};

export default Head;
