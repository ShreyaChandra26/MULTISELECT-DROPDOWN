import React from "react";
import Multiselect from "./components/MultiSelect";
import "./components/style.css";

const App = () => {
  return (
    <div>
      <h1> Multiselect Dropdown</h1>
      <Multiselect
        value={["Australia", "Canada", "Denmark"]}
        readonly={false}
      />
    </div>
  );
};

export default App;
