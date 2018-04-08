import React from 'react'
import classNames from 'classnames'
import './Bomb.css'

class Bomb extends React.Component {
  constructor(props) {
    super(props)
    this.state = {timer: 90}
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    )
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      timer: this.state.timer - 1
    })
  }

  render() {
    const {color} = this.props
    return (
      <div className={classNames('Bomb', `Bomb--${color}`)}>
        <div className={classNames(`Bomb-counter`)}>
          {this.state.timer}
        </div>
      </div>
    );
  }
}

export default Bomb
