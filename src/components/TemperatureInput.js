import React from 'react';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit',
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    //this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    //const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <div>
        <label>Enter temperature in {scaleNames[scale]}: </label>
        <input value={temperature} onChange={this.handleChange}></input>
        <hr />
      </div>
    );
  }
}

export default TemperatureInput;
