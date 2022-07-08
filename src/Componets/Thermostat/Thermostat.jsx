import React from "react";
import { useState } from "react";
import "./Thermostat.css";

function Thermostat() {
  const [currentTemperature, setCurrentTemperature] = useState(15);
  const [temparatureColor, setCurrentTemparatureColor] = useState("normal");

  const increaseTemperature = () => {
    const newTemperature = currentTemperature + 1;

    if (newTemperature > 25) return;

    if (newTemperature > 5) {
      setCurrentTemparatureColor("cool");
    }

    if (newTemperature > 10) {
      setCurrentTemparatureColor("normal");
    }

    if (newTemperature > 17) {
      setCurrentTemparatureColor("warm");
    }

    if (newTemperature > 20) {
      setCurrentTemparatureColor("hot");
    }

    setCurrentTemperature(newTemperature);
  };

  const decreaseTemperature = () => {
    const newTemperature = currentTemperature - 1;

    if (newTemperature < 5) return;

    if (newTemperature === 15) {
      setCurrentTemparatureColor("normal");
    }

    if (newTemperature < 20) {
      setCurrentTemparatureColor("warm");
    }

    if (newTemperature < 17) {
      setCurrentTemparatureColor("normal");
    }

    if (newTemperature < 10) {
      setCurrentTemparatureColor("cool");
    }

    if (newTemperature <= 5) {
      setCurrentTemparatureColor("cold");
    }

    setCurrentTemperature(newTemperature);
  };

  return (
    <div className="Thermostat-Container">
      <div className={`Display ${temparatureColor}`}>
        <p id="Display-Text">{currentTemperature}°C</p>
      </div>

      <div className="Control-Button-Container">
        <button
          onClick={() => increaseTemperature()}
          className="Control-Button"
        >
          +
        </button>
        <button
          onClick={() => decreaseTemperature()}
          className="Control-Button"
        >
          -
        </button>
      </div>
    </div>
  );
}

export default Thermostat;
