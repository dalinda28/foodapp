import React from 'react';
import Logo from './img/logo.png';
import {MdShoppingBasket} from 'react-icons/md';

const Header = () => {
    return (
        <Header className='fixed z-50 w-screen bg-slate-300 p-6 px-16'>
            {/* Desktop / Tablet */}
            <div className='hidden md:flex w-full h-full'>
                <div className='flex items-center gap-2 '>
                    <img src={Logo} className='w-8 object-cover' alt='logo' />
                    <p className='text-headingColor text-xl font-bold'>Wael</p>
                </div>

                <ul className='flex items-center grap-8 ml-auto'>
                    <li className='text-base text-textColor text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                    <li className='text-base text-textColor text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                    <li className='text-base text-textColor text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
                    <li className='text-base text-textColor text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                </ul>
                <div className='relative'>

                </div>
            </div>
            {/* Mobile */}
            <div className='flex md:hidden w-full h-full'>
                <MdShoppingBasket/>
            </div>
        </Header>
    )
}

export default Header