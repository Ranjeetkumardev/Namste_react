
const Footer = () => {
  return (
    <>
      <div className="absolute mt-44 w-full">
        <div className=" w-full  flex justify-between bg-black  text-white mx-auto mt-16  mb-0">
          <div className="mx-auto">
            <h1 className="font-bold text-xl">Company</h1>
            <p>About</p>
            <p>Careers</p>
            <p>Team</p>
            <p>Swiggy One</p>
            <p>Swiggy Instamart</p>
            <p>Swiggy Genie</p>
          </div>
          <div className="mx-auto">
            <h1 className="font-bold text-xl">Contact us</h1>
            <p>Help & Support</p>
            <p>Partner with us</p>
            <p>Ride with us</p>
          </div>
          <div className="mx-auto">
            <h1 className="font-bold text-xl">We deliver to:</h1>
            <p>Chandigarh</p>
            <p>Bangalore</p>
            <p>Mumbai</p>
            <select className="bg-gray-600 text-white Md:p-2 md:m-2 rounded-sm">
              <option value="0"> Delhi</option>
              <option value="1"> Pune</option>
              <option value="2"> Hyderabad</option>
              <option value="3"> Gurgaon</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col justify-center bg-black text-white border-t-2 border-cyan-300 ">
          <h1 className="font-bold text-xl mx-auto">FoodVilla</h1>
          <p className="mx-auto">© 2023 Bundl T echnologies Pvt. Ltd</p>
        </div>
      </div>
    </>
  );
  
  
};

export default Footer