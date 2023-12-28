import ItemList from "./itemList";

const RestoCategory = ({ cardData, showItem, setshowIndex }) => {
  // comenting this to make state lift/to make controled that means give the power of its parent
  //const [showItem, setshowItem] = useState(false);
  const handleClick = () => {
    setshowIndex();
  };

  return (
    <div className="text-center w-6/12 mx-auto my-4 p-4  bg-gray-50 shadow-lg ">
      <div className="flex justify-between" onClick={handleClick}>
        <span className="font-bold text-md">
          {cardData.title} ({cardData.itemCards.length})
        </span>
        <span>⬇️</span>
      </div>
      {showItem && <ItemList items={cardData.itemCards} />}
    </div>
  );
};
export default RestoCategory;
