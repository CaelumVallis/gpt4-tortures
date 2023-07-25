import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import { ErrorProvider } from './components/utils/withStripeErrorHandling';
import Card from './components/Card/Card';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const App = () => {
  return (
    <ErrorProvider>
      <Elements stripe={stripePromise}>
        <Card />
        {/* other components */}
      </Elements>
    </ErrorProvider>
  );
};

export default App;
