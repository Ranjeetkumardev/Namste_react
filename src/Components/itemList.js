import { IMG_CDN_URL } from "../utils/contants";

const ItemList = ({ items }) => {
//console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="m-2 p-2 border-gray-200 border-b-2 flex justify-between text-left"
          key={item.card.info.id}
        >
          <div className="w-9/12">
            <div className="py-2">
              <span>{item.card.info.name}</span>
              <span> - ₹{item.card.info.price / 100}</span>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-4">
            <div className="absolute">
              <button className="rounded-lg p-2 mx-9 my-12 bg-black text-white shadow-lg">Add+</button>
            </div>
            <img src={IMG_CDN_URL + item.card.info.imageId} className="w-full rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
