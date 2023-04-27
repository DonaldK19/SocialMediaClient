import React from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import { logIn, signUp } from "../../actions/AuthAction";

export const Auth = () => {
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading);
  const [isSignUp, setSignUp] = useState(true);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmpass: "",
    username: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass ? dispatch(signUp(data)) :setConfirmPass(false)
    }
    else{
      dispatch(logIn(data))
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmpass: "",
      username: "",
    });
  };
  return (
    <div className="Auth">
      {/* Left Side  */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>Appwrk Media</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      {/* <LogIn/> */}
      {/* Right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                className="infoInput"
                placeholder="First Name"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                className="infoInput"
                placeholder="Last Name"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              className="infoInput"
              placeholder="Usernames"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <input
              type="password"
              className="infoInput"
              placeholder="Password"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                placeholder="Confirm Password"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            *Confirm Password Is Not Same
          </span>
          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {setSignUp((prev) => !prev);resetForm()}}
            >
              {isSignUp
                ? "Already have an account. Log In"
                : "Don't have an account? Sign Up"}
            </span>
          </div>
          <button className="button infoButton" type="submit" disabled={loading}>
            {loading?"Loading...": isSignUp ? "Signup" : "Log In"}
          </button>
        </form>
      </div>
    </div>
  );
};

// function LogIn() {
//     return (
//       <div className="a-right">
//         <form className="infoForm authForm">
//           <h3>Log In</h3>
//           <div>
//             <input
//               type="text"
//               className="infoInput"
//               placeholder="Usernames"
//               name="username"
//             />
//           </div>
//           <div>
//             <input
//               type="password"
//               className="infoInput"
//               placeholder="Password"
//               name="password"
//             />
//           </div>

//           <div>
//               <span>Don't have an account Sign up</span>
//           </div>
//           <button className="button infoButton" type='submit'>Login</button>
//         </form>
//       </div>
//     );
//     }

function SignUp() {
  return (
    <div className="a-right">
      <form className="infoForm authForm">
        <h3>Sign up</h3>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="First Name"
            name="firstname"
          />
          <input
            type="text"
            className="infoInput"
            placeholder="Last Name"
            name="lastname"
          />
        </div>
        <div>
          <input
            type="text"
            className="infoInput"
            placeholder="Usernames"
            name="username"
          />
        </div>
        <div>
          <input
            type="password"
            className="infoInput"
            placeholder="Password"
            name="password"
          />
          <input
            type="password"
            className="infoInput"
            placeholder="Confirm Password"
            name="confirmpass"
          />
        </div>

        <div>
          <span style={{ fontSize: "12px" }}>
            Already have an account. Login
          </span>
        </div>
        <button className="button infoButton" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
