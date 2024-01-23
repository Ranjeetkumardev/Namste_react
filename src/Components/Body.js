import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import {SWIGGY_API} from "../utils/constrants"

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  // searchText is a local state variable for searching in input box
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    // console.log(
    //   json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    // );

    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  const isOnline = useOnline();

  if (!isOnline) {
    return <h1>Offline, please check your internet connection!!</h1>;
  }

  if (!allRestaurants) return null; // not render component (Early return)

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="h-10 flex justify-center mt-2">
        <input
          type="text"
          className=" border rounded-xl rounded-r-sm border-red-200 w-[320] "
          placeholder=" Search a restaurent you want.."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="px-4 bg-green-100 border rounded-xl rounded-l-sm border-red-300"
          onClick={() => {
            // need to filter the data
            // need to update the restaurants
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap text-wrap">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              {restaurant.info.avgRating > 4 ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
