import React from 'react'
import styled from 'styled-components'
import { useStateContext } from '../context/StateContext'
const Main = styled.div`
position:absolute;
background-color:black;

touch-action:none;
overflow:hidden;
z-index:999;
width:100vw;
height:100vh;
display:flex;
justify-content:center;
align-items:center;
color:white;
p{
    font-size:400px;
}

`

const Kontakt = () => {
    const {setkontakt } = useStateContext()
  return (
    <div>
        <Main>
            <p onClick={()=>setkontakt(false)}>x</p>
        </Main>
    </div>
  )
}

export default Kontakt