import { IMG_CDN_URL } from "../utils/contants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData.info;
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{costForTwo}</h4>
      <h4>{avgRating} stars </h4>
    </div>
  );
};
export default RestaurantCard;
