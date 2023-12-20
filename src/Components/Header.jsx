import { Link } from "react-router-dom"; // link tag become anchor tag behind the scien becouse browser understand anchor tag 
import { useState } from "react";
import Logo from "../assets/IMG/foodvilla.png"

//client side routing => we don't want to load anything form the server {link network tab}
export const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src={Logo}
      />
    </a>
  );
};

const Header = () => {
  const[isLogedIn ,setLogedIn] = useState(false)
  return (
    <div className="header">
      <Title />
      <div className="nav-item">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/about">About us </Link>
          </li>

          <li>
           
            <Link to="/contact">Contact us </Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      {isLogedIn ? (
        <button onClick={() => setLogedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setLogedIn(true)}>Login</button>
      )}
    </div>
  );
};

export default Header;
