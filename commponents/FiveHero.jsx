import React from 'react'
import styled from 'styled-components';

const Cont = styled.div`
    min-height:100vh;
    padding-top:20px;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    
`
const Slika = styled.div`
box-shadow: #d16309 2px 2px 22px;
    width:300px;
    height:300px;
    background-color:#d16309;
    border-radius:20px;
    margin-bottom:20px;
    color:white
`
const Main = styled.div`
    display:flex;
    justify-content:center;
    align-items:flex-start;
    flex-wrap:wrap;
    gap:30px;
    overflow:scroll;
`
const Title = styled.p`
text-align:center;
font-family:Josefin Sans;
font-size:30px;
margin-bottom:20px;
`
const FiveHero = () => {
    return (
        <div>

            <Cont>
                <Title> Mi nudimo</Title>
                <Main>
                    <Slika>
                        <h1>Beginner</h1>
                        <p>Sanity database</p>
                        <p>Next js/React js</p>
                        <p>Do 5000 korisnika mesecno</p>
                        <p>Do pet stranica</p>
                        <h3>Cena:100-300</h3>
                    </Slika>
                    <Slika>
                        <h1>Pro</h1>
                        <p>MySql</p>
                        <p>Next js/React js</p>
                        <p>Do deset stranica</p>
                        <p>10000 korisnika mesecno</p>
                        <h3>Cena:300-500</h3>
                    </Slika>
                    <Slika>
                        <h1>Ultimate</h1>
                        <p>MySql</p>
                        <p>Mogucnost vise database</p>
                        <p>Next js/React js</p>
                        <p>Do deset stranica</p>
                        <p>20000 korisnika mesecno</p>
                        <h3>Cena:500-1000</h3>
                    </Slika>
                </Main>

            </Cont>
        </div>
    )
}

export default FiveHero