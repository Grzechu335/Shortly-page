import React, { useState } from 'react'
import LogoSvg from '../public/assets/Svg/LogoSvg'
import {
    AiOutlineMenu as MenuIcon,
    AiOutlineClose as CloseIcon,
} from 'react-icons/ai'

function Header() {
    const [nav, setNav] = useState<boolean>(false)
    const navToggle = () => {
        setNav(!nav)
    }
    return (
        <header className="fixed top-0 w-full h-20 z-[100]">
            <div className="max-w-screen-xl mx-auto w-full h-full px-4 backdrop-blur-md">
                <nav className="flex justify-between items-center text-gray-500 font-bold h-full">
                    {/* Desktop Left Side */}
                    <div className="flex items-center space-x-10">
                        <div className="cursor-pointer">
                            <LogoSvg color="#000000" />
                        </div>
                        <div className="hidden sm:flex">
                            <ul className="flex items-center space-x-10">
                                <li className="hover:text-black">Features</li>
                                <li className="hover:text-black">Pricing</li>
                                <li className="hover:text-black">Resources</li>
                            </ul>
                        </div>
                    </div>
                    {/* Desktop Right Side */}
                    <div className="hidden sm:flex">
                        <ul className="flex items-center space-x-10">
                            <li className="hover:text-black">Login</li>
                            <li>
                                <button className="text-white rounded-full bg-[#2bd1cf] px-5 py-2 hover:bg-[#2bd1cf]/70 whitespace-nowrap">
                                    Sing Up
                                </button>
                            </li>
                        </ul>
                    </div>
                    {/* Mobile menu icon */}
                    <div
                        className="sm:hidden cursor-pointer"
                        onClick={navToggle}
                    >
                        {nav ? <CloseIcon size={25} /> : <MenuIcon size={25} />}
                    </div>
                    {/* Mobile nav */}
                    {nav && (
                        <div className="fixed top-20 bg-[#3a3053] w-[90%] mx-auto rounded-xl px-4 py-10 flex flex-col items-center sm:hidden">
                            <div className="border-b border-gray-600 w-full">
                                <ul className="text-center pb-4 space-y-4 text-white font-bold">
                                    <li>Features</li>
                                    <li>Pricing</li>
                                    <li>Resources</li>
                                </ul>
                            </div>
                            <div className="w-full px-4">
                                <ul className="text-center mt-4 space-y-4 text-white font-bold">
                                    <li>Login</li>
                                    <li className="rounded-full bg-[#2bd1d0] p-3 hover:bg-[#2bd1cf]/70">
                                        <button>Sing Up</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    )
}

export default Header
