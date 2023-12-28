import { Link } from "react-router-dom"; // link tag become anchor tag behind the scien becouse browser understand anchor tag 
import { useState } from "react";
import Logo from "../assets/IMG/foodvilla.png"
import useOnline from "../utils/useOnline";

//client side routing => we don't want to load anything form the server {link network tab}

const Header = () => {
  const [isLogedIn, setLogedIn] = useState("Login")  
  const isOnline = useOnline()
  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <div className="m-2">
        <Link to="/">
          <img className="w-20 rounded-3xl" alt="logo" src={Logo} />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Status:{isOnline ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>

          <li className="px-4">
            <Link to="/about">About us </Link>
          </li>

          <li className="px-4">
            <Link to="/contact">Contact us </Link>
          </li>
          <li className="px-4">
            <Link to="/instamart">InstaMart </Link>
          </li>
          <li className="px-4">Cart</li>
          <button className="btn" onClick={() => { isLogedIn === "Login" ? setLogedIn("Logout") : setLogedIn("Login") }}>{isLogedIn}</button>
          <li></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
