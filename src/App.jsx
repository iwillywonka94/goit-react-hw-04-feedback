import { Component } from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';


import style from './app.module.css'

const options = ["good", "neutral", "bad"]

class Feedback extends Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addFeedback = (propertyName) => {
    this.setState(prevState => {
      return {
        [propertyName]: prevState[propertyName] + 1
      }
    })
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, value) => acc += value, 0)
    return total;
  }

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const goodFeedback = this.state.good;
    return Math.round((goodFeedback / total) * 100)
  }

  render() {
    const { good, neutral, bad } = this.state;
    const { addFeedback } = this
    const count = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    const defaultPercent = percent ? percent : '0'
    return (
      <div className={style.container}>
        <Section title='Please, leave feedback'>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={addFeedback}
          />
        </Section>
        <Section title='Statistics'>
          {!count && <Notification message={"There is no feedback"}/>}
          {count > 0 && <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={count}
            percent={defaultPercent}
          />}
        </Section>
      </div>
    );
  }
}

export default Feedback;
