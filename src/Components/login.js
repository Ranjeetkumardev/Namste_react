import React, { useRef, useState } from "react";
import checkValiDate from "../utils/validate";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   updateProfile,
// } from "firebase/auth";
// import { auth } from "../utils/Firebase";
// import { useNavigate } from "react-router-dom";
// import { addUser } from "../utils/userSlice";
// import { useDispatch } from "react-redux";

const Login = () => {
  const [isloggedIn, setIsloggedIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    // validate the data /form
    const message = checkValiDate(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;
   // Sign In /Sign Up
   // Sign Up Logic
    if (!isloggedIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up => Profile updated!
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://media.licdn.com/dms/image/D4D35AQEKkZ66jjZe7A/profile-framedphoto-shrink_400_400/0/1698774851375?e=1705809600&v=beta&t=xuKlDQaXv-zoibtlm4ohdLrh2LxRlaEdIFNaAeFSzLE",
          })
            .then(() => {
              // dispatch action

              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .then(() => {
              navigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorMessage + " " + errorCode);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsloggedIn(!isloggedIn);
  };

  return (
    <div>
      <div className="bg-black absolute -mt-48 -z-30">
        <img
          className="w-screen opacity-75 "
          src="https://thumbs.dreamstime.com/b/people-eating-heal…hy-meals-wooden-table-food-delivery-160387494.jpg"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 p-12 mt-24 mx-auto right-0 left-0 bg-black text-white rounded-lg bg-opacity-80 z-50 "
      >
        <h1 className="font-bold text-2xl py-4">
          {isloggedIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isloggedIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full rounded bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-2 w-full rounded bg-gray-800"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-2 my-2 w-full rounded bg-gray-800"
        />
        <p className="font-bold text-red-500 text-lg">{errorMessage}</p>
        <button
          className="p-2 my-4 bg-red-700 w-full rounded"
          onClick={handleButtonClick}
        >
          {isloggedIn ? "Sign In" : "Sign Up"}
        </button>
        <p onClick={toggleSignInForm}>
          {isloggedIn
            ? "New to FoodVilla?Singn Up now"
            : "Allready registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
