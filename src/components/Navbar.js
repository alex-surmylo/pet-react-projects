import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg'
import { useGlobalContext } from "../context";

const Navbar = () => {
    const { setSearchTerm } = useGlobalContext()

    const clearSearchInp = () => {
        setSearchTerm( '' )
    }

    return (
        <nav className='navbar'>
            <div className="nav-center">
                <Link to='/' onClick={ clearSearchInp }>
                    <img src={ logo } alt="cocktail logo" className='logo'/>
                </Link>
                <ul className="nav-links">
                    <li>
                        <Link to='/'>Home</Link>
                        <Link to='/about'>About</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
