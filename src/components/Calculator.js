import React from 'react';
import BoilingVerdict from './BoilingVerdict';
import TemperatureInput from './TemperatureInput';
import convert, { toCelsius, toFahrenheit } from '../helpers/Converter';

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: '', scale: 'c' };
  }

  handleCelsiusChange(temperature) {
    this.setState({ scale: 'c', temperature });
  }

  handleFahrenheitChange(temperature) {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius =
      scale === 'c' ? temperature : convert(temperature, toCelsius);
    const fahrenheit =
      scale === 'f' ? temperature : convert(temperature, toFahrenheit);

    return (
      <fieldset>
        <legend>Temperature Calculator</legend>
        <div>
          <TemperatureInput
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange}
          />
          <TemperatureInput
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict celsiusTemperature={parseFloat(celsius)} />
        </div>
      </fieldset>
    );
  }
}

export default Calculator;
