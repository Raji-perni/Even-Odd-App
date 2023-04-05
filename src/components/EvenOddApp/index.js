// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {countNumber: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  onIncreaseValue = () => {
    const randomNumber = this.getRandomNumber()

    this.setState(prevState => ({
      countNumber: prevState.countNumber + randomNumber,
    }))
  }

  render() {
    const {countNumber} = this.state
    const numbertype = countNumber % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="main-container">
        <div className="container">
          <h1 className="heading">Count {countNumber}</h1>
          <p className="para-num">Count is {numbertype}</p>
          <button className="btn" type="button" onClick={this.onIncreaseValue}>
            Increment
          </button>
          <p className="para-details">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
