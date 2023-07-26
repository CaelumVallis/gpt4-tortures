import { useState } from 'react';

import './AmountInput.css';

const AmountInput = ({ onSubmit }) => {
  const [amount, setAmount] = useState('');

  return (
    <div className='amount-element'>
      <input value={amount} onChange={(e) => setAmount(e.target.value)} />
      <button onClick={() => onSubmit(amount)}>Send</button>
    </div>
  );
};

export default AmountInput;
