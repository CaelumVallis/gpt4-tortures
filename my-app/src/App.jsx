import { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import './App.css';

import { ErrorProvider } from './components/utils/withStripeErrorHandling';
import Checkout from './components/Checkout/Checkout';
import AmountInput from './components/AmountInput/AmountInput';

import { createPaymentIntent } from './components/utils/stripeApi';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const App = () => {
  const [clientSecret, setClientSecret] = useState('');

  useEffect(() => {
    const cs = new URLSearchParams(window.location.search).get('payment_intent_client_secret');
    if (cs) setClientSecret(cs);
  }, []);

  const makePaymentIntent = async (amount) => {
    const { clientSecret: cs } = await createPaymentIntent({ amount });
    setClientSecret(cs);
  };

  const options = {
    clientSecret,
    appearance: {
      theme: 'stripe',
    },
  };

  return (
    <ErrorProvider>
      <AmountInput onSubmit={(amount) => makePaymentIntent(amount)} />
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <Checkout clientSecret={clientSecret} />
        </Elements>
      )}
    </ErrorProvider>
  );
};

export default App;
