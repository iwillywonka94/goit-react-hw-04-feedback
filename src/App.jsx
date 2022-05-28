import { useState } from 'react';

import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';
import Notification from 'components/Notification';


import style from './app.module.css'

const options = ["good", "neutral", "bad"]

const Feedback = () => {
  const [state, setState] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  });

  const addFeedback = propertyName => {
    setState(prevState => {
      return {
        ...prevState,
        [propertyName]: prevState[propertyName] + 1
      }
    })
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = state;
    return good + neutral + bad;
  }

  const countPositiveFeedbackPercentage = () => {
    const goodFeedback = state.good;
    return Math.round((goodFeedback / countTotalFeedback()) * 100)
  }

  const { good, neutral, bad } = state;
  const count = countTotalFeedback();
  const percent = countPositiveFeedbackPercentage();
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
        {!count && <Notification message={"There is no feedback"} />}
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

export default Feedback;
