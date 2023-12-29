import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from './../utils/contants';
import RestoCategory from "./RestoCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restoMenu = useRestaurant(resId);
 const [showIndex ,setshowIndex] = useState(null)

  if (restoMenu === null) return <Shimmer />;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restoMenu?.cards[0]?.card?.card?.info;

  const categories =
    restoMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <div className="restoMenu">
      <div className="text-center">
        <h1 className="font-bold my-3 text-2xl">{name}</h1>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <p className="font-bold text-lg">
          {cuisines.join(",")} - {costForTwo / 100}
        </p>
        <p className="font-medium">{avgRating} stars</p>
        {/* categories accordian */}
        {categories.map((category ,index) => (
          <RestoCategory
          key={category?.card?.card.title} 
            cardData={category?.card?.card}
            showItem={index===showIndex ? true : false}
            setshowIndex={()=>setshowIndex(index)}
          />
        ))}
      </div>
       {/* <div>
        <h1>MENU</h1>
        <ul>
          {Object.values(itemCards).map((items) => (
            <li key={items?.card?.info?.id}>
              {items?.card?.info?.name}-Rs:
              {(items?.card?.info?.price || items?.card?.info?.defaultPrice) /
                100}
            </li>
          ))}
        </ul>
      </div>  */}
    </div>
  );
};
export default RestaurantMenu;
