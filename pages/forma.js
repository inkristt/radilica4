import React from 'react'
import { useStateContext } from '../context/StateContext'

const forma = () => {
    const {proba} =useStateContext()
  return (
    <div>{proba}</div>
  )
}

export default forma