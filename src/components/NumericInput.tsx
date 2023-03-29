import React, { ChangeEvent } from 'react';

interface NumericInputProps {
  value: string;
  setValue: (value: string) => void;
  leftText?: string;
}

const NumericInput: React.FC<NumericInputProps> = ({ value, setValue, leftText }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^[\d]*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  const handleIncrement = () => {
    if (isNaN(parseInt(value))) {
      setValue('1');
    } else {
      setValue((parseInt(value) + 1).toString());
    }
  };

  const handleDecrement = () => {
    if (parseInt(value) > 0) {
      setValue((parseInt(value) - 1).toString());
    }
  };

  return (
    <div>
      {leftText && <span className="column">{leftText}</span>}
      <input className="column" type="text" value={value} onChange={handleChange} />
      <div className="column">
        <button onClick={handleDecrement} style={{ fontSize: '0.8rem' }}>-</button>
        <button onClick={handleIncrement} style={{ fontSize: '0.8rem' }}>+</button>
      </div>
    </div>
  );
};

export default NumericInput;
