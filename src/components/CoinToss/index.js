// Write your code here
import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        tossImg: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.tails + 1,
        tossImg: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, tossImg} = this.state

    return (
      <div className="coin-toss-app">
        <div className="coin-toss-card">
          <h2 className="heading">Coin Toss Game</h2>
          <p className="heads-tails">Heads (or) Tails</p>
          <img src={tossImg} className="toss-img" alt="toss result" />
          <button onClick={this.tossCoin} className="toss-btn" type="button">
            Toss Coin
          </button>
          <div className="toss-counts-card">
            <p className="toss-count">Total: {tails + heads}</p>
            <p className="toss-count">Heads: {heads}</p>
            <p className="toss-count">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
