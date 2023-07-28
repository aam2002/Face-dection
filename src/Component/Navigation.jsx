import React from "react";
const Navigation = ({ onRouteChange, isSignedIn, setIsLoggedin }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => {
            localStorage.setItem("isLoggedin", false);
            setIsLoggedin(false);
          }}
          className="f3 link din black underline pa2 pointer"
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <p
          onClick={() => onRouteChange("signin")}
          className="f3 link din black underline pa2 pointer"
        >
          Sign In
        </p>
        <p
          onClick={() => {
            onRouteChange("register");
          }}
          className="f3 link din black underline pa2 pointer"
        >
          Register
        </p>
      </nav>
    );
  }
};
export default Navigation;
