import React from 'react';

function BoilingVerdict(props) {
  if (props.celsiusTemperature >= 100) {
    return <p>The water will boil.</p>;
  }
  return <p>The water will not boil.</p>;
}

export default BoilingVerdict;
