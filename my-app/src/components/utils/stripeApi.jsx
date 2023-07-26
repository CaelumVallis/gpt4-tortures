export const createPaymentIntent = async ({ amount }) => {
  const STRIPE_API_URL = 'https://api.stripe.com/v1/payment_intents';
  const data = new URLSearchParams();
  data.append('amount', `${amount}`);
  data.append('currency', 'usd');
  data.append('payment_method_types[]', 'card');

  let clientSecret;

  console.log(process.env.REACT_APP_STRIPE_SECRET_KEY);

  await fetch(STRIPE_API_URL, {
    method: 'POST',
    body: data,
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  })
    .then((response) => response.json())
    .then((data) => (clientSecret = data.client_secret))
    .catch((error) => console.error('Error:', error));

  return {
    clientSecret,
  };
};
