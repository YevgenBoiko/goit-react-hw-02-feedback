import React from 'react';
import Buttons from '../Buttons/Buttons';
import Statistics from '../Statistics/Statistics';
import Notification from '../Notification/Notification';
import PropTypes from 'prop-types';
import { ButtonList, Layout, Section } from './Feedback.styled';

class Feedback extends React.Component {
  static defaultProps = {
    initialValue: 0,
  };

  static propTypes = {
    initialValue: PropTypes.number.isRequired,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleIncrement = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(prevState => {
      return {
        total: prevState.good + prevState.neutral + prevState.bad,
      };
    });
    this.countPositiveFeedbackPercentage();
  };

  countPositiveFeedbackPercentage() {
    this.setState(prevState => {
      let totalFeedback = Math.round((prevState.good * 100) / prevState.total);
      return {
        feedback: totalFeedback,
      };
    });
  }

  render() {
    const { good, neutral, bad, total, feedback } = this.state;

    return (
      <Layout>
        <Section>
          <h2>Please leave Feedback</h2>
          <ButtonList>
            <Buttons onHandleIncrement={this.handleIncrement} />
          </ButtonList>
        </Section>
        <Section>
          {!bad && !neutral && !good ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={feedback}
            />
          )}
        </Section>
      </Layout>
    );
  }
}

export default Feedback;
