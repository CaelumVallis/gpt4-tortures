import { CardElement } from '@stripe/react-stripe-js';
import { withStripeErrorHandling } from '../utils/withStripeErrorHandling';

import './Card.css';

const CARD_OPTIONS = {
  iconStyle: 'solid',
  style: {
    base: {
      color: '#32325d',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '16px',
      '::placeholder': {
        color: '#aab7c4',
      },
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a',
    },
  },
};

const CardField = ({ onChange }) => {
  return (
    <div className='FormRow'>
      <CardElement className='card-element' options={CARD_OPTIONS} onChange={onChange} />
    </div>
  );
};

export default withStripeErrorHandling(CardField);
