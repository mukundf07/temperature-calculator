export const toCelsius = (fahrenheit) => ((fahrenheit - 32) * 5) / 9;

export const toFahrenheit = (celsius) => (celsius * 9) / 5 + 32;

export default function convert(temperature, converting) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = converting(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}
