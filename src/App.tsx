import React, { useState } from 'react';
import './App.css';
import DateInput from './components/DateInput';
import DecimalInput from './components/DecimalInput';
import NumericInput from './components/NumericInput';
import ApiClient from './services/ApiClient';
import { Message } from './common/interfaces';

const App: React.FC = () => {
  const [cartValue, setCartValue] = useState('');
  const [distance, setDistance] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState<Date | null>(null);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  const connection = new ApiClient('http://localhost:8080');

  const handleSubmit = async () => {
    const message: Message = {
      cart_value: Number.parseInt(cartValue),
      delivery_distance: Number.parseInt(distance),
      number_of_items: Number.parseInt(amount),
      time: date ? date.toISOString() : ''
    };
    connection.sendMessage(message);
    try {
      const response = await connection.sendMessage(message);
      setDeliveryFee(response.data.deliveryFee);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <h1>Delivery fee calculator</h1>
      <div className="form-container">
        <DecimalInput value={cartValue} setValue={setCartValue} leftText="Cart value" rightText="€" />
        <DecimalInput value={distance} setValue={setDistance} leftText="Delivery distance" rightText="meters" />
        <NumericInput value={amount} setValue={setAmount} leftText="Amount of items" />
        <DateInput value={date} setValue={setDate} leftText="Time" />
        <button onClick={handleSubmit}>Calculate</button>
        {deliveryFee > 0 && <h1>{deliveryFee} €</h1>}
      </div>
    </div>
  );
};

export default App;
