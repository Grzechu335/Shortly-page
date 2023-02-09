import React from 'react'

type Props = {
    title: string
    items: string[]
}

function FooterItem({ title, items }: Props) {
    return (
        <div className="flex flex-col items-center sm:items-start text-white mt-10 sm:mt-0">
            <h4 className="font-extrabold">{title}</h4>
            <ul className="mt-5 text-gray-400 font-bold text-xs space-y-3">
                {items.map((item, i) => (
                    <li
                        key={i}
                        className="hover:text-[#67b9b7]"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FooterItem
