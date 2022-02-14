import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  fetch(
    `http://api.aviationstack.com/v1/flights?access_key=5ef166aeb3a6780fccdfa37793d81651`
  )
    .then((res) => res.json())
    .then(console.log);
  return (
    <div className="App">
      <div>Flights</div>
    </div>
  );
}

export default App;
