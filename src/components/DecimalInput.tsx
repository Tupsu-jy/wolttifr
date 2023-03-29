import React, { ChangeEvent } from 'react';

interface DecimalInputProps {
  value: string;
  setValue: (value: string) => void;
  leftText?: string;
  rightText?: string;
}

const DecimalInput: React.FC<DecimalInputProps> = ({ value, setValue, leftText, rightText }) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;

    if (/^[\d.,]*$/.test(newValue)) {
      setValue(newValue);
    }
  };

  return (
    <div>
      {leftText && <span className="column">{leftText}</span>}
      <input className="column" type="text" value={value} onChange={handleChange} />
      {rightText && <span className="column">{rightText}</span>}
    </div>
  );
};

export default DecimalInput;
