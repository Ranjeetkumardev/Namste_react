import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from './../utils/contants';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restoMenu = useRestaurant(resId);
  if (restoMenu === null) return <Shimmer />;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    restoMenu?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restoMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card;
  console.log(itemCards);
  return (
    <div className="restoMenu">
      <div>
        <h1>{name}</h1>
        <img src={IMG_CDN_URL + cloudinaryImageId} />
        <h4>
          {cuisines.join(",")} - {costForTwo / 100}
        </h4>

        <h3>{avgRating} stars</h3>
      </div>
      <div>
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
      </div>
    </div>
  );
};
export default RestaurantMenu;
