import { useState } from 'react';

interface PaymentFormProps {
  onSubmit: (
    amount: number,
    sender: string,
    receiver: string,
    city: string
  ) => void;
}

const PaymentForm = ({ onSubmit }: PaymentFormProps) => {
  const [amount, setAmount] = useState<number>(0);
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    onSubmit(amount, sender, receiver, city);
    setAmount(0);
    setSender('');
    setReceiver('');
    setCity('');
  };

  return (
    <div className="card">
      <h2>Create Conditional Payment</h2>

      <label>Amount (USDC)</label>
      <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} />

      <label>Sender</label>
      <input value={sender} onChange={(e) => setSender(e.target.value)} />

      <label>Receiver</label>
      <input value={receiver} onChange={(e) => setReceiver(e.target.value)} />

      <label>City</label>
      <input value={city} onChange={(e) => setCity(e.target.value)} />

      <button onClick={handleSubmit}>Start Payment Workflow</button>
    </div>
  );
};

export default PaymentForm;
