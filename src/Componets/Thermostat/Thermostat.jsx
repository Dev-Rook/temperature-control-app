import React from 'react'
import { useState } from 'react'
import './Thermostat.css'

function Thermostat() {

    const [currentTemperature, setCurrentTemperature] = useState(15);
    const [temparatureColor, setCurrentTemparatureColor] = useState("normal");

    const increaseTemperature = () => {
        const newTemperature = currentTemperature + 1;

        if (newTemperature > 30) return;
                        
        if (newTemperature <= 11) {
            setCurrentTemparatureColor("normal");
        }

        if (newTemperature <= 19) {
            setCurrentTemparatureColor("normal");
        }


        if (newTemperature >= 20) {
            setCurrentTemparatureColor("hot");
        }

        setCurrentTemperature(newTemperature);
    }

    const decreaseTemperature = () => {
        const newTemperature = currentTemperature - 1;

        if (newTemperature < 0) return;
        
        if (newTemperature > 11) {
            setCurrentTemparatureColor("normal");
        }

        if (newTemperature < 10) {
            setCurrentTemparatureColor("cold");
        }

        setCurrentTemperature(newTemperature);
    }


  return (
    <div className="Thermostat-Container">
        <div className={`Display ${temparatureColor}`}>
            <p id="Display-Text">{currentTemperature}°C</p>
        </div>

        <div className="Control-Button-Container">
            <button onClick={() => increaseTemperature()} className="Control-Button">+</button>
            <button onClick={() => decreaseTemperature()} className="Control-Button">-</button>
        </div>
    </div>
  )
}

export default Thermostat