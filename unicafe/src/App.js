import { useState } from 'react'

const Title = ({text}) => <h1>{text}</h1>

const Button = ({ increaseFunc, text }) => (
  <button onClick={increaseFunc}>{text}</button>
)

const StatisticLine = ({ text, value, ending }) => <p>{text} {value} {ending}</p>

const Statistics = ({ good, neutral, bad, average, summary, positive }) => (
  <div>
    <StatisticLine text={'good'} value={good} />
    <StatisticLine text={'neutral'} value={neutral} />
    <StatisticLine text={'bad'} value={bad} />
    <StatisticLine text={'all'} value={summary} />
    <StatisticLine text={'average'} value={average} />
    <StatisticLine text={'positive'} value={positive} ending={'%'} />

  </div>
)


const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = (stateRead, stateSet) => {
    stateSet(stateRead + 1);
  }

  // get average + summary
  const all = [good, neutral, bad];
  
  var summary = 0;
  for (var i = 0; i < all.length; i++) {
    summary += all[i];
  }

  var average = summary / all.length;
  

  return (
    <div>
      <Title text='give feedback' />

      <Button increaseFunc={() => increaseByOne(good, setGood)} text={'good'} />
      <Button increaseFunc={() => increaseByOne(bad, setBad)} text={'bad'} />
      <Button increaseFunc={() => increaseByOne(neutral, setNeutral)} text={'neutral'} />
    
      <Statistics good={good} neutral={neutral} bad={bad} 
      average={average} summary={summary} positive={good / summary * 100} />
    </div>
  )
}

export default App