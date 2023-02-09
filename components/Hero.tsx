import Image from 'next/image'
import React from 'react'
import heroImage from '../public/assets/images/illustration-working.svg'

type Props = {}

const Hero = (props: Props) => {
    return (
        <div className="mt-20 w-full">
            <div className="max-w-screen-xl mx-auto">
                <div className="w-full grid sm:grid-cols-2 items-center px-4 py-14 ">
                    <div className="space-y-8 order-2 sm:order-1 text-center sm:text-start mt-8 sm:mt-0">
                        <h2 className="text-[#35313c] text-5xl sm:text-7xl font-bold">
                            More than just shorter links
                        </h2>
                        <p className="text-gray-400 font-bold">
                            Build your brand recognition and get detailed
                            insights on how your links are performing.
                        </p>
                        <button className="text-white rounded-full bg-[#2bd1cf]  w-1/2 sm:w-1/4 font-bold py-2 hover:bg-[#2bd1cf]/70 whitespace-nowrap">
                            Sing Up
                        </button>
                    </div>
                    <div className="order-1 sm:order-2 ">
                        <Image
                            src={heroImage}
                            alt="/"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
