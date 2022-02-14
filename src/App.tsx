import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  let params = new URLSearchParams({
    access_key: "5ef166aeb3a6780fccdfa37793d81651",
    limit: "2",
  });
  fetch(`http://api.aviationstack.com/v1/flights?${params}`)
    .then((res) => res.json())
    .then(console.log);
  return (
    <div className="App">
      <div>Flights</div>
    </div>
  );
}

export default App;
