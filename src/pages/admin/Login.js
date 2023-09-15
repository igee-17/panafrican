import React, { useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiSolidLockAlt } from "react-icons/bi";
import { auth } from "../../firebase/firebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const ControlledLogin = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle login logic here

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = JSON.stringify(userCredential.user);
        // ...

        // add user details to local storage
        localStorage.setItem("user", user);

        // set isAuth to true add add to localStorage
        localStorage.setItem("isAuth", true);
        setIsAuth(true);

        setError(null);
        navigate("/admin/stay-updated");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(error.message);
      });
  };

  return (
    <div className="admin-login">
      {/* <div className="left">
        <div className="center">
          <h1>PAC Holdings</h1>
          <p>Admin Login</p>
        </div>
      </div> */}
      <div className="right">
        <form onSubmit={handleSubmit}>
          <div className="form-center">
            {/* <h1>Hello Again!</h1> */}
            <h1>Admin Login</h1>
            <p>Welcome back</p>

            <div className="input-item">
              <label htmlFor="email">
                <AiOutlineMail />
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Email Address"
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div className="input-item">
              <label htmlFor="password">
                <BiSolidLockAlt />
              </label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>

            {error && <p>{error}</p>}

            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ControlledLogin;
