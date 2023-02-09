import Image from 'next/image'
import React from 'react'

type Props = {
    id: number
    title: string
    text: string
    logo: string
}

function StatisticItem({ title, text, logo, id }: Props) {
    const marginTop = id * 10
    return (
        <div
            className={`bg-white rounded-md border shadow-lg border-gray-300 p-8 relative mt-${marginTop} h-full`}
        >
            <div className="bg-[#3b3052] p-3 rounded-full w-16 h-16 flex justify-center items-center absolute top-0 transform translate-y-[-50%] left-1/2 translate-x-[-50%] sm:translate-x-0 sm:left-8">
                <Image
                    src={logo}
                    alt=""
                    width={30}
                />
            </div>
            <h4 className="text-2xl font-extrabold mt-10">{title}</h4>
            <p className="text-gray-400 font-semibold mt-6">{text}</p>
        </div>
    )
}

export default StatisticItem
