import { Component } from 'react'

import FeedbackOptions from './FeedbackOptions'
import Statistics from './Statistics'

class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  // оновити в стейті ту властивість, ключ якої = id button
  // а id button це ї є ключ
  onLeaveFeedback = (e) => 
  {
    const queryToRenew = e.target.id;
    console.log(queryToRenew);
    this.setState((prev) => ({ [queryToRenew]: prev[queryToRenew] + 1 }))
  }

  countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

  countPositiveFeedbackPercentage = () =>
    Math.round(
      this.state.good * 100 / this.countTotalFeedback()
    )


  render() {
    return (
      <>
      <div>{ this.state.good}</div>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={ this.countTotalFeedback() } positivePercentage={ this.countPositiveFeedbackPercentage() }/>
      </>
      
    )
  }
}

export default App


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
