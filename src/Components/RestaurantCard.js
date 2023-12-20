import { IMG_CDN_URL } from "./contants"; 

// everything we are building is a config driven UI (more dynamic)

const RestaurantCard = ({
  name,
  cuisines,
  lastMileTravelString,
  cloudinaryImageId
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines}</h3>
      <h4>{lastMileTravelString} Minutes</h4>
    </div>
  );
};

export default RestaurantCard;
