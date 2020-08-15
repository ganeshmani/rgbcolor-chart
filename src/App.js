import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data.json";
function App() {
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div>
      <div className="w-1/2 h-16 mx-auto flex justify-around items-center">
        <div
          className="rounded"
          style={{
            width: "40px",
            height: "20px",
            backgroundColor: selectedColor && selectedColor.hexString,
          }}
        ></div>

        <div className="text-textcolor">
          HEX :{" "}
          <span className="text-hexcolor">
            {selectedColor && selectedColor.hexString}
          </span>
        </div>
        <div className="text-textcolor">
          RGB :{" "}
          <span className="text-hexcolor">
            {selectedColor &&
              `${selectedColor.rgb.r},${selectedColor.rgb.g},${selectedColor.rgb.b}`}
          </span>
        </div>
        <div className="text-textcolor">
          HSL :{" "}
          <span className="text-hexcolor">
            {selectedColor &&
              `${Math.round(selectedColor.hsl.h)},${selectedColor.hsl.s}%,${
                selectedColor.hsl.l
              }%`}
          </span>
        </div>
      </div>
      <div className="grid rounded-lg  grid-cols-6 w-1/2 mx-auto overflow-y-scroll content-area">
        {data.map((item, index) => {
          return (
            <div
              className="w-full rounder-lg h-12 transition duration-150 ease-in-out transform hover:scale-150 card"
              style={{
                backgroundColor: item.hexString,
              }}
              onClick={() => {
                setSelectedColor(item);
              }}
              dataHex={item.hexString}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
