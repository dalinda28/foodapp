import React from 'react';
import Logo from '../img/Logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='z-50 w-screen p-6 px-16'>
            {/* Desktop / Tablet */}
            <div className='hidden md:flex w-full h-full items-center justify-between'>
                <a href="/" className='flex items-center gap-2 '>
                    <img src={Logo} className='w-1/4 object-cover' alt='logo' />
                    <p className='text-headingColor text-xl font-bold'></p>
                </a>

                <ul className='flex items-center gap-8'>
                    <li className='text-base text-textColor text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><a href="#home">Accueil</a></li>
                    <li className='text-base text-textColor text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><a href="#menu">Menu</a></li>
                    <li className='text-base text-textColor text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><a href="#service">Service</a></li>
                    <li className='text-base text-textColor text-headingColor duration-100 transition-all ease-in-out cursor-pointer'><a href="#propos">À propos</a></li>
                </ul>
                <div className='relative'>
                    <a href="#contact" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                        <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                        </span>
                        <span class="relative text-white">Button Text</span>
                    </a>
                </div>
            </div>
            {/* Mobile */}
            <div className='flex items-center justify-between md:hidden w-full h-full'>
                <a href="/" className='flex items-center gap-2 '>
                    <img src={Logo} className='w-8 object-cover' alt='logo' />
                    <p className='text-headingColor text-xl font-bold'>WAWEL</p>
                </a>
                <div className='relative'>
                    <a href="#_" class="relative inline-flex items-center justify-center inline-block p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 rounded-lg shadow-2xl group">
                        <span class="absolute top-0 left-0 w-40 h-40 -mt-10 -ml-3 transition-all duration-700 bg-red-500 rounded-full blur-md ease"></span>
                        <span class="absolute inset-0 w-full h-full transition duration-700 group-hover:rotate-180 ease">
                            <span class="absolute bottom-0 left-0 w-24 h-24 -ml-10 bg-purple-500 rounded-full blur-md"></span>
                            <span class="absolute bottom-0 right-0 w-24 h-24 -mr-10 bg-pink-500 rounded-full blur-md"></span>
                        </span>
                        <span class="relative text-white">Button Text</span>
                    </a>

                </div>
            </div>
        </header>
    )
}

export default Header