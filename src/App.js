import React, { useState} from "react";
import Navigation from "./Component/Navigation";
import "./App.css";
import Logo from "./Component/Logo/Logo";
import ImageLinkFrom from "./Component/ImageLink/ImageLinkForm";
import Rank from "./Component/Rank/Rank";
import Bg from "./Component/bg/bg";
import SignIn from "./Component/SignIn/SignIn";
import Register from "./Component/Register/Register";

const App = () => {
  const [route, setRoute] = useState("signin");
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [user , setUser] = useState({})
  const onRouteChange = (rout) => {
    if (rout === "signout") {
      setIsSignedIn(false);
    } else if (rout === "home") {
      setIsSignedIn(true);
    }
    setRoute(rout);
  };
 const loadUser = (data) =>{
    
    setUser({
      id : data.id, 
      name:data.name,
      email:data.email,
      entries:data.entries,
      joined:data.joined
    })
  }

  return (
    <div className="App">
      <Bg style={{ zIndex: "-3" }} />
      <Navigation isSignedIn={isSignedIn} onRouteChange={onRouteChange} />
      {route === "home" ? (
        <>
          <Logo />
          <Rank name ={user.name} entries={user.entries} />
          <ImageLinkFrom user={user} setUser = {setUser} />
        </>
      ) : route === "signin" ? (
        <SignIn loadUser={loadUser} onRouteChange={onRouteChange} />
      ) : (
        <Register loadUser={loadUser} onRouteChange={onRouteChange} />
      )}
    </div>
  );
};

export default App;
