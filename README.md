
# Stripe.js demo

This repository contains demo of Stirpe.js "Card" and "PaymentElement" components, that are used to create a basic checkout page.

After starting the local project, enter some number in "Amount" input and click "Send" button. Then enter some card credentials, select your country and click "Pay now" button. The result of your payment attempt will be displayed in the message under the pay button.
## Run Locally

Clone the project

```bash
  git clone https://github.com/CaelumVallis/gpt4-tortures.git
```

Go to the project directory

```bash
  cd my-app
```

Install dependencies

```bash
  npm install
```

Create an .env file with following text

```bash
  REACT_APP_STRIPE_KEY={your_stripe_key}
  REACT_APP_STRIPE_SECRET_KEY={your_secret_stripe_key}
```

Start the app

```bash
  npm run start
```

