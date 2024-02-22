function Shimmer() {
  return (
    <div className="flex flex-wrap ml-12">
      {Array(20)
        .fill("")
        .map((e, index) => (
          <div className="h-52 w-48 bg-gray-100 m-2" key={index}></div>
        ))}
    </div>
  );
}

export default Shimmer;
