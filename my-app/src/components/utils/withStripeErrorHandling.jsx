import { useState, createContext, useContext, useMemo, useCallback } from 'react';

// Create a Context
export const ErrorContext = createContext();

// Create Context provider which will contain the error state and error handler function
export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState(null);

  const handleError = useCallback((error) => {
    setError(error);
  }, []);

  return (
    <ErrorContext.Provider value={useMemo(() => ({ error, handleError }), [error, handleError])}>
      {children}
    </ErrorContext.Provider>
  );
};

// Create the HOC that uses the context
export const withStripeErrorHandling = (WrappedComponent) => (props) => {
  const { error, handleError } = useContext(ErrorContext);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return <WrappedComponent onError={handleError} {...props} />;
};
