import { toBeDisabled } from '@testing-library/jest-dom/matchers'
import { useState } from 'react'


const Button = ({text,handleClick}) =>{
  return(
    <button onClick={handleClick}>
      {text}
    </button>
  )
}

const StatisticLine  = ({text,value}) => {
  return(
    <div> {text}  {value}</div>
  )
}


const Statistics = ({good,bad,neutral}) => {
  const total = good + neutral + bad
  const ex = good - bad
  const avg = ex / total

  const pos = good / total

  if (total == 0 ){
    return(
      <div>No feedback given</div>
    )
  }

  return(
    <div>
      <StatisticLine  text="good" value={good} />
      <StatisticLine  text="neutral" value={neutral} />
      <StatisticLine  text="bad" value={bad} />
      <StatisticLine  text="average" value={avg}/>
      <StatisticLine  text="postive" value={pos} />
    </div>
  )


}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>give feedback</h1>

      <Button text="good" handleClick={increaseGood}/>
      <Button text="neutral" handleClick={increaseNeutral}/>
      <Button text="bad" handleClick={increaseBad}/>

      <h1>statistics</h1>

      <Statistics good={good} bad={bad} neutral={neutral} />


    </div>
  )
}

export default App