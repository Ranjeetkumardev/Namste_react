import { IMG_CDN_URL } from "./contants"; 

// everything we are building is a config driven UI (more dynamic)

const RestaurantCard = ({
   title,
    price,
    image,
  categary
}) => {
  return (
    <div className="card">
      <img src={image} />
      <h2>{title}</h2>
      <h3>{categary}</h3>
      <h4>{price}</h4>
    </div>
  );
};

export default RestaurantCard;
