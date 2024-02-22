import { useParams } from "react-router-dom";
import Shimmer from "../utils/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "../utils/constrants";
import RestoCategory from "./RestoCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //console.log(resId);
  const restoMenu = useRestaurant(resId);
 
  const [showIndex, setshowIndex] = useState(null);

  if (restoMenu === null) return <Shimmer />;
 
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restoMenu?.cards[2]?.card?.card?.info;  
  const categories =
    restoMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="w-full flex">
      <div className="mt-5 ml-5 -mr-10">
        <img className="w-[320]" src={IMG_CDN_URL + cloudinaryImageId} />
      </div>
      <div className="text-center w-9/12">
        <h1 className="font-bold my-3 text-2xl mt-5 ">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwo / 100}
        </p>
        <p className="font-medium">{avgRating} stars</p>
        {/* categories accordian */}
        {categories.map((category, index) => (
          <RestoCategory
            key={category?.card?.card.title}
            cardData={category?.card?.card}
            showItem={index === showIndex ? true : false}
            setshowIndex={() => setshowIndex(index)}
          />
        ))}
       </div>
      {/* <div>
    //     <h1>MENU</h1>
    //     <ul>
    //       {Object.values(itemCards).map((items) => (
    //         <li key={items?.card?.info?.id}>
    //           {items?.card?.info?.name}-Rs:
    //           {(items?.card?.info?.price || items?.card?.info?.defaultPrice) /
    //             100}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>  */}
    </div>
  );
};
export default RestaurantMenu;
