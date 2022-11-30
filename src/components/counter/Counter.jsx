import React, {useState} from 'react';
import { Container} from './Counter.styled';
import FeedbackOptions from '../Btn/Btns';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';


const Counter =() => {
   const [good, setGood] = useState(0);
   const [neutral, setNeutral] = useState(0);
   const [bad, setBad] = useState(0);
 

  const countTotalFeedback = () => {
    return (good + neutral + bad);
  };

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return (Math.ceil((good / total) * 100));
  };

  const handleIncrement = e => {
    
    switch (e.target.name) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };
  
    return (
      <Container>
        <Section title="Please leave feadback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={handleIncrement}
          />
        </Section>
        {countTotalFeedback() ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          </Section>
        ) : (
          <Notification />
        )}
      </Container>
    );
  }


export default Counter;
