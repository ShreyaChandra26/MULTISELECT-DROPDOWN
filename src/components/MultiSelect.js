import React, { useState } from "react";
import "./style.css";

function Multiselect({ readonly, value }) {
  const [select, setSelect] = useState(value || []);
  const options = [
    "Australia",
    "Colombia",
    "Canada",
    "Denmark",
    "Angola",
    "Argentina",
    "China",
    "Belarus",
    "Bangladesh",
    "Austria",
    "Belgium",
    "France",
    "Italy",
    "Greece",
    "Germany",
    "Brazil",
    "Finland",
    "Bulgaria",
    "Algeria",
    "Afghanistan",
    "Cameroon"
  ];

  const check = (selected) => {
    if (readonly) return;

    if (select.includes(selected)) {
      setSelect(select.filter((value) => value !== selected));
    } else {
      setSelect([...select, selected]);
    }
  };

  return (
    <div className="select">
      <div className="selected">
        {select.map((selects) => (
          <span key={selects} className="selected-value">
            {selects}
            {!readonly && (
              <span
                className="remove"
                onClick={() =>
                  setSelect(select.filter((value) => value !== selects))
                }
              >
                &times;
              </span>
            )}
          </span>
        ))}
      </div>
      <div className="container" >
        <div className="options">
          {options.map((option) => (
            <label key={option}>
              <input
                type="checkbox"
                checked={select.includes(option)}
                onChange={() => check(option)}
                value={option}
                disabled={readonly}
              />
              {option}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Multiselect;
