import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constrants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();
  const handleItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          className="m-2 p-2 border-gray-200 border-b-2 flex justify-between text-left"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-medium">{item.card.info.name}</span>
              <span className="font-medium"> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-sm">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              {/* do sassinment  */}
              <button
                onClick={() => handleItem(item)}
                className="rounded-lg p-2 mx-9 my-12 bg-black text-white shadow-lg"
              >
                Add+
              </button>
            </div>
            <img
              src={IMG_CDN_URL + item.card.info.imageId}
              className="w-full rounded-md"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
