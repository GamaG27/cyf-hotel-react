import React from "react";

import Bookings from "./components/Bookings";
import { TouristInfoCards } from "./components/TouristInfoCards";
import { Heading } from "./components/Heading";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Heading />
      <TouristInfoCards />
      <Bookings />
    </div>
  );
};

export default App;
