import React from 'react'
import Image from '../assets/LGfront.jpeg'

const Navbar = () => {
    return(
        <div className='fixed w-full h-[80px] flex: justify-between items-center px-4 bg-black text-gray' >
            <div>
                <img src={Image} alt="lakeside" />

                {/*Menu is here*/}
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Products</li>
                    <li>Contact</li>
                </ul>
            </div>

            {/*Hamburger*/}
            <div>
                
            </div>


        </div>
    )
}

export default Navbar;