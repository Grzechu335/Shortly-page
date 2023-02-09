import Image from 'next/image'
import React from 'react'
import BrandIcon from '../public/assets/images/icon-brand-recognition.svg'
import RecordsIcon from '../public/assets/images/icon-detailed-records.svg'
import CustomizableIcon from '../public/assets/images/icon-fully-customizable.svg'
import StatisticItem from './StatisticItem'

const statistics = [
    {
        id: 0,
        title: 'Brand Recognition',
        text: "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
        logo: BrandIcon,
    },
    {
        id: 1,
        title: 'Detailed Records',
        text: 'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.',
        logo: RecordsIcon,
    },
    {
        id: 2,
        title: 'Fully Customizable',
        text: 'Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.',
        logo: CustomizableIcon,
    },
]

function Statistics() {
    return (
        <div className="w-full bg-[#f0f1f7]">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* Text container */}
                <div className="text-center sm:max-w-md mx-auto">
                    <h3 className="text-[#35323d] text-5xl font-bold">
                        Advanced Settings
                    </h3>
                    <p className="text-gray-400 mt-10 font-bold">
                        Track how your links are performing across the web with
                        our advanced statistics dashboard.
                    </p>
                </div>
                {/* Images container */}
                {/* Desktop version */}
                <div className="mt-20 grid sm:grid-cols-3 gap-8 relative">
                    {/* Line for desktop */}
                    <span className="hidden sm:block absolute top-1/2 transform translate-y-[-50%] w-full h-2 bg-[#29d0d1]"></span>
                    {/* Line for mobile */}
                    <span className="sm:hidden absolute left-1/2 transform translate-x-[-50%] w-2 h-4/5 bg-[#29d0d1]"></span>
                    {statistics.map((stat) => (
                        <StatisticItem
                            key={stat.id}
                            id={stat.id}
                            title={stat.title}
                            text={stat.text}
                            logo={stat.logo}
                        />
                    ))}
                </div>
            </div>
            <div className="w-full bg-[#f0f1f7] h-32"></div>
        </div>
    )
}

export default Statistics
