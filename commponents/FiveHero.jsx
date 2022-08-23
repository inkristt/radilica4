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
    box-shadow: #d16309 2px 2px 11px;
    width:300px;
    height:300px;
    background-color:rgba(255, 255, 255, 0.714);
    border-radius:20px;
    margin-bottom:20px;
    color:black;
    display:flex;
  
    align-items:center;
    flex-direction:column;

    h1{
        margin-top:40px;
        z-index: 1;
    }
    span{
        z-index: 1;
    }
    p{
        z-index: 1;
    }
    h3{
        margin-top:30px;
        z-index: 1;
    }
    overflow: hidden;
    position: relative;
    cursor:pointer;
    &::after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        height: 490%;
         width: 170%;
        background: #ff7518;
        -webkit-transition: all .5s ease-in-out;
        transition: all .5s ease-in-out;
        -webkit-transform: translateX(-98%) translateY(-25%) rotate(45deg);
        transform: translateX(-98%) translateY(-25%) rotate(45deg);
    }
    &:hover:after{
        -webkit-transform: translateX(-9%) translateY(-25%) rotate(45deg);
  transform: translateX(-9%) translateY(-25%) rotate(45deg);
    }
`
const Main = styled.div`
    padding:20px;
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
        <div id='section5'>

            <Cont>
                <Title> Mi nudimo</Title>
                <Main>
                    <Slika>
                        <h1>Beginner</h1>
                        <span>Sanity database</span>
                        <p>Next js/React js</p>
                        <p>Do pet stranica</p>
                        <p>Do 5000 korisnika mesecno</p>
                        <h3>Cena:100-300 e</h3>
                    </Slika>
                    <Slika>
                        <h1>Pro</h1>
                        <span>MySql</span>
                        <p>Next js/React js</p>
                        <p>Do deset stranica</p>
                        <p>10000 korisnika mesecno</p>
                        <h3>Cena:300-500 e</h3> 
                    </Slika>
                    <Slika>
                        <h1>Ultimate</h1>
                        <span>MySql</span>
                        <p>Mogucnost vise database-a</p>
                        <p>Next js/React js</p>
                        <p>Do deset stranica</p>
                        <p>20000 korisnika mesecno</p>
                        <h3>Cena:500-1000 e</h3> 
                    </Slika>
                </Main>

            </Cont>
        </div>
    )
}

export default FiveHero