import React, { useState } from 'react';
import style from './BodyMassCalculator.module.css';
import Button from './../Button/Button';

const BodyMassCalculator: React.FC = () => {
  const [weight, setWeight] = useState<string>('');
  const [height, setHeight] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const calculateBMI = () => {
    const parsedWeight = parseFloat(weight);
    const parsedHeight = parseFloat(height);

    if (!isNaN(parsedWeight) && !isNaN(parsedHeight) && parsedHeight !== 0) {
      const bmi = parsedWeight / (parsedHeight * parsedHeight);
      setResult(bmi);
    } else {
      setResult(null);
    }
  };

  const handleReset = () => {
    setWeight('');
    setHeight('');
    setResult(null);
  };

  return (
    <div className={style.container}>
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

      <div className={style.buttons}>
        <Button text={'Result'} onClick={calculateBMI} />
        <Button text={'Reset'} onClick={handleReset} alertMode={true} />
      </div>

      <div className={style.inputs}>
        {result !== null && (
          <p className={style.result}>BMI: {result.toFixed(2)}</p>
        )}
      </div>
    </div>
  );
};

export default BodyMassCalculator;
