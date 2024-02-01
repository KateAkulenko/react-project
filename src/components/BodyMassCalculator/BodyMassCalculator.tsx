//base
import React, { useState } from 'react';
//style
import style from './BodyMassCalculator.module.css';
//components
import Button from './../Button/Button';

const BodyMassCalculator: React.FC = () => {
  // Variables to and its type
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);
  // Function to calculate BMI based on weight and height
  const calculateBMI = () => {
    // Parsing weight and height to numbers
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);
    // Checking if the parsed values are valid for BMI calculation
    if (!isNaN(parsedWeight) && !isNaN(parsedHeight) && parsedHeight !== 0) {
      // Calculating BMI formula
      const bmi = parsedWeight / (parsedHeight * parsedHeight);
      setResult(bmi);
    } else {
      // If the values are invalid, resetting the result to null
      setResult(null);
    }
  };
  // Function to reset input fields and result
  const handleReset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <div className={style.container}>
      {/* inputs for weught and height */}
      <div className={style.inputs}>
        <label className={style.label}>
          Weight: Input weight in kilograms
          <input
            className={style.input}
            type="number"
            placeholder="Example 60,8"
            step="10"
            min="0"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </label>

        <label className={style.label}>
          Height: Input height in meters
          <input
            className={style.input}
            type="number"
            placeholder="Example 1,70"
            step="0.10"
            min="0"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </label>
      </div>
      {/* Buttons for calculating BMI and resetting */}
      <div className={style.buttons}>
        <Button text={'Result'} onClick={calculateBMI} />
        <Button text={'Reset'} onClick={handleReset} alertMode={true} />
      </div>
      {/* Displaying the BMI result if available */}
      <div className={style.inputs}>
        {result !== null && (
          <p className={style.result}>BMI: {result.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default BodyMassCalculator;
