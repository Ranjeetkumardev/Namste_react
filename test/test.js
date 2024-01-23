import { Link, useNavigate } from "react-router-dom"; // link tag become anchor tag behind the scien becouse browser understand anchor tag
import { useState, useContext, useEffect } from "react";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
//client side routing => we don't want to load anything form the server {link network tab}

const Header = () => {
  const [isLogedIn, setLogedIn] = useState("Login");
  const isOnline = useOnline();
  const { loggedInUser } = useContext(UserContext);
  //subscribing  to the store using sellector
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/errr");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed out
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsubscribe when component will unmount
    return () => unsubscribe();
  }, []);

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg w-full sticky top-0 left-0 right-0 z-10 ">
      <div className="m-2">
        <Link to="/">
          <img
            className="w-20 rounded-xl m-2"
            alt="logo"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2NPuIAX3lcmusPP0XL6M2fqQd1rIc1MRXA&usqp=CAU"
          />
        </Link>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">{isOnline ? "Online:🟢" : "Ofline:🔴"}</li>
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

          <li className="px-4 font-medium text-xl">
            <Link to="/cart"> Cart- ({cartItems.length} items) </Link>
          </li>
          <button
            className="btn"
            onClick={() => {
              !isLogedIn ? (
                <li className="px-4 font-medium text-xl">
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <li className="px-4 font-medium text-xl">
                  <Link to="/login" onClick={handleSignOut}>
                    Logout
                  </Link>
                </li>
              );
            }}
          >
            {isLogedIn}
          </button>
          <li className="px-4 font-medium">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
