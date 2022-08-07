import Link from 'next/link'
import React, { useRef } from 'react'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { useStateContext } from '../context/StateContext'
const Header = () => {
    const { pokaziMenu, setPokaziMenu } = useStateContext()
    return (
        <div className='heder' >

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
                        <button type='button' className='kontaktbtn'><span>Kontakt</span></button>
                    </Link>
                </div>
                <div className='menifon'>
                    {!pokaziMenu ? <p onClick={() => setPokaziMenu(true)}><HiOutlineMenuAlt4 /> </p> : <div className='menuwraper'>
                        <div className='fonlinkcont'>
                            <p onClick={() => setPokaziMenu(false)}><AiOutlineClose /></p>
                            <h3>Menu</h3>
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
                                <button type='button' className='kontaktbtn'><span>Kontakt</span></button>
                            </Link>
                        </div>
                    </div>}
                </div>
            </div>
        </div>
    )
}

export default Header