import React from 'react'
import LogoSvg from '../public/assets/Svg/LogoSvg'
import FooterItem from './FooterItem'
import {
    AiFillFacebook as FacebookIcon,
    AiOutlineTwitter as TwitterIcon,
    AiOutlineInstagram as InstagramIcon,
} from 'react-icons/ai'
import { BsPinterest as PinterestIcon } from 'react-icons/bs'

const footerItems = [
    {
        id: 0,
        title: 'Features',
        items: ['Link Shortening', 'Branded Links', 'Analytics'],
    },
    {
        id: 1,
        title: 'Resources',
        items: ['Blog', 'Developers', 'Support'],
    },
    {
        id: 2,
        title: 'Company',
        items: ['About', 'Our Team', 'Careers', 'Contact'],
    },
]

function Footer() {
    return (
        <div className="w-full bg-[#242028] py-10">
            <div className="max-w-screen-xl mx-auto px-3">
                <div
                    className={`grid text-center place-items-center sm:place-items-start sm:text-start sm:grid-cols-${
                        3 + footerItems.length
                    }`}
                >
                    <div className="sm:col-span-2 flex  cursor-pointer">
                        <LogoSvg color="#ffffff" />
                    </div>
                    {footerItems.map((item) => (
                        <FooterItem
                            key={item.id}
                            title={item.title}
                            items={item.items}
                        />
                    ))}
                    <div className="text-white flex space-x-6 mt-10 sm:mt-0">
                        <FacebookIcon
                            size={25}
                            className="hover:text-[#67b9b7] cursor-pointer"
                        />
                        <TwitterIcon
                            size={25}
                            className="hover:text-[#67b9b7] cursor-pointer"
                        />
                        <PinterestIcon
                            size={25}
                            className="hover:text-[#67b9b7] cursor-pointer"
                        />
                        <InstagramIcon
                            size={25}
                            className="hover:text-[#67b9b7] cursor-pointer"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
