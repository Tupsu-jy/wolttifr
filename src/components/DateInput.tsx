import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

interface DateInputProps {
  value: Date | null;
  setValue: (value: Date | null) => void;
  leftText?: string;
}

const DateInput: React.FC<DateInputProps> = ({ value, setValue, leftText }) => {

  const handleDateChange = (date: Date | null) => {
    setValue(date);
  };

  const formatDate = (date: Date | null) => {
    if (!date) {
      return '';
    }
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <div>
      {leftText && <span className="column">{leftText}</span>}
      <input className="column" type="text" value={formatDate(value)} readOnly />
      <div className="column">
        <DatePicker
          selected={value}
          onChange={handleDateChange}
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          dateFormat="dd/MM/yyyy HH:mm"
          customInput={<button>Open Calendar</button>}
        />
      </div>
    </div>
  );
};

export default DateInput;
