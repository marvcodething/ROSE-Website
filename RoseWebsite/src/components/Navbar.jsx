import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

function Navbar() {
    const [nav, setNav] = useState(false);
    const [dropdown, setDropdown] = useState(false);
    const location = useLocation();

    const handleNav = () => {
        setNav(!nav);
    };

    const handleDropdown = () => {
        setDropdown(!dropdown);
    };

    const closeNav = () => {
        setNav(false);
        setDropdown(false);
    };

    useEffect(() => {
        closeNav();
    }, [location]);

    return (
        <div className="font-roboto top-0 left-0 flex justify-between items-center h-20 w-full px-4 bg-purple-600 z-50">
            <Link to="/" onClick={closeNav}>
                <img src={logo} alt="Rose Logo" className="w-12 h-12" />
            </Link>
            <ul className="hidden md:flex">
                <Link to="/" onClick={closeNav} className="block p-4 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                    <li>Home</li>
                </Link>
                <li className="relative p-4 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                    <button onClick={handleDropdown} className="focus:outline-none flex items-center">
                        Services
                        <span className="ml-1 w-2 h-2 border-l-2 border-b-2 border-black transform -rotate-45"></span>
                    </button>
                    {dropdown && (
                        <ul className="absolute top-full left-0 mt-2 bg-purple-500 text-white shadow-lg z-50">
                            <Link to="/unionCard" onClick={closeNav} className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300">
                                <li>Union Card</li>
                            </Link>
                            <Link to="/ocomm" onClick={closeNav} className="block px-4 py-2 hover:bg-orange-500 transition-colors duration-300">
                                <li>OCOMM Signup</li>
                            </Link>
                            <li className="px-4 py-2 hover:bg-orange-500 transition-colors duration-300 cursor-pointer">Bargaining Portal</li>
                            <li className="px-4 py-2 hover:bg-orange-500 transition-colors duration-300 cursor-pointer">Data Center</li>
                        </ul>
                    )}
                </li>
                <Link to="/contact" onClick={closeNav} className="block p-4 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                    <li>Contact</li>
                </Link>
                <Link to="/faq" onClick={closeNav} className="block p-4 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                    <li>FAQ</li>
                </Link>
                <Link to="/news" onClick={closeNav} className="block p-4 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                    <li>News</li>
                </Link>
            </ul>
            <div onClick={handleNav} className="block md:hidden">
                {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-purple-600 z-50 bg-purple-600 ease-in-out duration-500' : 'fixed left-[-100%]'}>
                <Link to="/" onClick={closeNav}>
                    <img src={logo} alt="Rose Logo" className="w-12 h-12 m-4" />
                </Link>
                <ul className="pt-12 uppercase">
                    <Link to="/" onClick={closeNav} className="block p-4 border-b border-orange-500 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                        <li>Home</li>
                    </Link>
                    <li className="p-4 border-b border-orange-500 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                        <button onClick={handleDropdown} className="focus:outline-none flex items-center">
                            SERVICES
                            <span className="ml-1 w-2 h-2 border-l-2 border-b-2 border-black transform rotate-90"></span>
                        </button>
                        {dropdown && (
                            <ul className="mt-2 bg-purple-500 text-white">
                                <Link to="/unionCard" onClick={closeNav} className="block px-4 py-2 hover:bg-orange-500">
                                    <li>Union Card</li>
                                </Link>
                                <Link to="/ocomm" onClick={closeNav} className="block px-4 py-2 hover:bg-orange-500">
                                    <li>OCOMM Signup</li>
                                </Link>
                                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Bargaining Portal</li>
                                <li className="px-4 py-2 hover:bg-orange-500 cursor-pointer">Data Center</li>
                            </ul>
                        )}
                    </li>
                    <Link to="/contact" onClick={closeNav} className="block p-4 border-b border-orange-500 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                        <li>Contact</li>
                    </Link>
                    <Link to="/faq" onClick={closeNav} className="block p-4 border-b border-orange-500 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                        <li>FAQ</li>
                    </Link>
                    <Link to="/news" onClick={closeNav} className="block p-4 border-b border-orange-500 font-bold text-black hover:text-orange-500 transition-colors duration-300">
                        <li>News</li>
                    </Link>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;
