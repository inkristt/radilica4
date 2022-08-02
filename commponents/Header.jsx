import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='heder'>
        <div className='heder-kontakt'>
            <div className='radno-vreme'>
                    <p> Ponedeljak-Petak: 8:00 / 16:00</p>
            </div>
            <div className='heder-info'>
                <p>061 72 58 496</p>
                <button type='button'>ENG</button>
            </div>
        </div>
        <div className='heder-meni'>
            <div className='logo'>
                <p>Inkrist</p>
            </div>
            <div className='meni'>
                <Link href='/onama'>
                    <p className='meni-text'>O nama</p>
                </Link>
                <Link href='/usluge'>
                    <p className='meni-text'>Usluge</p>
                </Link>
                <Link href='/nasi-radovi'>
                    <p className='meni-text'>Naši radovi</p>
                </Link>
                <Link href='/kontakt'>
                    <p className='meni-text'>Kontakt</p>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header