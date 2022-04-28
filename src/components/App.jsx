import React from "react";
import Contact1 from "./Contact1";
import Contact2 from "./Contact2";
import Contact3 from "./Contact3";

function App() {
  return (
    <div>
      <div>
        <h1 className="heading">My Favourite Contacts:</h1>
        <Contact1 />
        <Contact2 />
        <Contact3 />
      </div>
      <div className="footer">
        <p>&#169; zakaria-akash 2022</p>
      </div>
    </div>
  );
}

export default App;
