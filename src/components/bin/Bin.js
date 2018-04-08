import React from 'react'
import classNames from 'classnames'
import './Bin.css'

const Bin = ({color, increase}) => <div className={classNames('Bin', `Bin--${color}`, {'Bin--increase': increase})}></div>

export default Bin
