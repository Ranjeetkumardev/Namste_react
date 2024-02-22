import { IMG_CDN_URL } from "../utils/constrants";

const RestaurantCard = (props) => {
  const { info } = props.resData; 
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =info;
  return (
    <div className="m-3 p-4 w-[225] h-[310] bg-gray-100 truncate rounded-lg">
      <img className="rounded-lg" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold py-2 text-lg">{name}</h2>
      <h3 className=" text-wrap">{cuisines.join(",")}</h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars </h4>
    </div>
  );
};
// Higher Order component

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-orange-300 absolute my-1 px-2 rounded-sm shadow-md ">
          Free Delivery
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
export default RestaurantCard;
