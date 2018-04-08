import React from 'react'
import Bomb from '../../components/bomb/Bomb'
import './Main.css'

const Main = () => (
  <div className='Main'>
    <Bomb color='blue' />
    <Bomb color='green' />
    <Bomb color='red' />
  </div>
)

export default Main
