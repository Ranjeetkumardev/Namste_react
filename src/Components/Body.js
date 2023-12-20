import { useState, useEffect } from "react";
import { restrauntList } from "./restrauntList";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
 

function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((res) =>
    res?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}
const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]); //Searchinput is local state variable &  setSearchInput is fun which is update to the variavle name
  // empty dependecy Array => call once after initial Render
  //dependecy Array[SearchText] => once after initial render + everytime after render (when searchText change)
  const [searchText, setSearchText] = useState(""); // never use useState in if else statment and not in for loop
  // never use useState at outside of a component becouse useState is a hooks that create a local variable in component
  useEffect(() => {
    //API Calls
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const details = Object.values(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    console.log(details[0].info.name);
    //opetional chaning
    setAllRestaurants(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  if (!allRestaurants) return null; // not render component (Early return) // or do optional chaning insteed of this

  //  if (filteredRestaurants?.length === 0)
  //    return <h1>Sorry,No matches for your search!!</h1>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          className="search-inpit"
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            filteredRestaurants(data);
            //
          }}
        >
          Search
        </button>
      </div>
      <div className="resturant-list">
        {/* <RestrauntCard
        cloudinaryImageId={restrauntList[0].data.cloudinaryImageId}
        name={restrauntList[0].data.name}
        cuisines={restrauntList[0].data.cuisines}
        lastMileTravelString={restrauntList[0].data.lastMileTravelString}
      />   or you can do this*/}
        {/* <RestrauntCard {...restrauntList[0].data} />  */}
        {/*  you can you for loop here but its better use the map method  */}
        {filteredRestaurants.map((restaurant) => {
          return <RestaurantCard {...restaurant.data} />;
        })}
      </div>
    </>
  );
};

export default Body;
