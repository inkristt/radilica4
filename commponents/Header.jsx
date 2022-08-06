import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='heder'>
        
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
                <Link href='/'>
                    <button type='button'><span>Kontakt</span></button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header