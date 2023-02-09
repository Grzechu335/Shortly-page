import Image from 'next/image'
import React from 'react'
import boostBackground from '../public/assets/images/bg-boost-desktop.svg'

function Boost() {
    return (
        <div className="w-full bg-[#3a3053] px-3 py-6 relative">
            <Image
                src={boostBackground}
                alt="background"
                fill
                style={{ objectFit: 'cover' }}
            />
            <div className="max-w-screen-xl mx-auto">
                <div className="w-full flex flex-col text-center py-10 relative">
                    <div className="space-y-6">
                        <h3 className="text-white font-extrabold text-2xl tracking-wider ">
                            Boost your links today
                        </h3>
                        <button className="text-white rounded-full bg-[#2bd1cf] w-1/2 sm:w-[15%] font-bold py-2 hover:bg-[#2bd1cf]/70 whitespace-nowrap">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Boost
