import { IMG_CDN_URL } from "../utils/constrants";

const FoodItem = ({ name, description, imageId, price }) => {
  //console.log(name)
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-pink-50 flex filex flex-wrap">
      <img src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h4 className="font-medium">Price: {price / 100}</h4>
      <h3>{description}</h3>
    </div>
  );
};
export default FoodItem;
