import '../styles/globals.css'

import React, { Children } from 'react'
import { StateContext } from '../context/StateContext'
import Lea from '../commponents/Lea'


function MyApp({ Component, pageProps }) {
  return <StateContext>
    <Lea>
      <Component {...pageProps} />
    </Lea>
  </StateContext>
}

export default MyApp
