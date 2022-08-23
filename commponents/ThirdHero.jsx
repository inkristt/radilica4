import React, { useRef } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import pexels from '../assets/pexels-hristo-fidanov-1252890.jpg'
import app1 from '../assets/app1.png'
import app2 from '../assets/app2.png'
import app3 from '../assets/app3.png'
const Section = styled.div`
  background-color: white;
    min-height:100vh;
    height: auto;
    width: 100vw;
    margin: 0 auto;
    overflow: hidden;

    display:flex;
    justify-content: flex-start;
    align-items:flex-start;
    position:relative;
`
const Title = styled.h1`
text-shadow:2px 2px 2px black;
    font-size:60px;
    font-family:"Josefin Sans";
    font-weight:300;
    color:white;
    position:absolute;
    top:1rem;
    left:5%;
    z-index:5;

    @media screen and (max-width:800px){
      font-size:40px;
  }
`
const Left = styled.div`
  width:35%;
  background-color:black;
  color:white;
  min-height:100vh;
  z-index:1;

  position:fixed;
  left:0;
  display:flex;
  justify-content: center;
  padding-top:200px;
  p{
    font-size:20px;
    width:400px;
  }
`
const Right = styled.div`
  position:absolute;
  padding-left:30%;
  left:35%;
  min-height:100vh;
  width:65%;
  display:flex;
  justify-content:flex-start;
  align-items:center;
  h1{
    width:5rem;
    margin: 0 2rem;
  }
  overflow:scroll;
`
const Slika = styled.div`
margin-right:20px;
width:500px;
height:300px;
div{
  background-color:black;
  width:500px;
  height:300px;
  overflow:hidden;
  &:hover{
      transform:scale(1.1)
  }
}
`

const ThirdHero = () => {

  return (
    <div id='section3'>
      <Section>
        <Title data-scroll data-scroll-speed='-1' > Dosadasnji poslovi </Title>
        <Left>
          <p> Nije tesko zakljuciti da smo novi u marketingu, zelimo svojim vrednim radom zainteresujemo sto vise potencijalnih klijenata. Ovo nam je jedan mali projekat kojim pokusavamo da se probijemo. </p>
        </Left>
        <Right >
          <Slika>
            <div>
              <a href='https://srebroshop444.vercel.app/'>
                <Image src={app2} width='500' height='300' />
              </a>
            </div>
          </Slika>
          <Slika>
            <div>
              <a href='https://beogradnadlanu.netlify.app/'>
                <Image src={app1} width='500' height='300' />
              </a>
            </div>
          </Slika>
          <Slika>
            <div>
              <a href='https://inkrist.net/'>
                <Image src={app3} width='500' height='300' />
              </a>
            </div>
          </Slika>
        </Right>
      </Section>
    </div>
  )
}

export default ThirdHero