import React from 'react'
import {FaBars, Fatimes} from 'react-icons/fa';

const Navbar = () => {
    return(
        <div className='fixed w-full h-[60px] flex: justify-between items-center px-60 bg-black text-gray-100' >
                <div>
                     {/*Menu is here*/}
                    <ul className='flex'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Products</li>
                        <li>Contact</li>
                    </ul>
            </div>

            {/*Hamburger*/}
            <div className = 'hidden'>
                <FaBars />
            </div>


        </div>
    )
}

export default Navbar;