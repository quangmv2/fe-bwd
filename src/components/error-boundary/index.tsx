import React from 'react';

interface ErrorBoundaryProps {

}

const ErrorBoundary: React.FC<ErrorBoundaryProps> = ({
    children
}) => {

  return (
      <React.Fragment>
          {
              children
          }
      </React.Fragment>
  );
}

export default ErrorBoundary;