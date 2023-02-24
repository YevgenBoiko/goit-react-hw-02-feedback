import PropTypes from 'prop-types';
import { Text } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <h2>Statistics</h2>
    <Text>Good: {good}</Text>
    <Text>Neutral: {neutral}</Text>
    <Text>Bad: {bad}</Text>
    <Text>Total: {total}</Text>
    <Text>Textositive Feedback: {positivePercentage}%</Text>
  </>
);

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
