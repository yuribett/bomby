import React from 'react'
import { connect } from 'react-redux'
import Bin from '../../components/bin/Bin'
import { tick, shuffle, reset } from '../../actions'
import './Footer.css'

class Footer extends React.Component {

  componentDidMount() {
    this.timerID = this.setTimer()
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  componentWillUpdate() {
    if(this.props.countdown === 0) {
      clearInterval(this.timerID);
      this.reset()
    }
  }

  setTimer = () => setInterval(() => this.props.tickCountdown(), 1000)

  reset() {
    this.props.shuffleBins()
    this.props.resetCountdown()
    this.timerID = this.setTimer()
  }

  render() {
    return (
      <div>
        <div className='Footer-binsContainer'>
          {this.props.sort.map(color => <Bin key={color} color={color} increase={false} />)}
        </div>
        <div className='Footer-countdown'>Change in {this.props.countdown}s</div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  countdown: state.bins.countdown,
  sort: state.bins.sort
})

const mapDispatchToProps = dispatch => ({
  tickCountdown: () => dispatch(tick()),
  resetCountdown: () => dispatch(reset()),
  shuffleBins: () => dispatch(shuffle())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

