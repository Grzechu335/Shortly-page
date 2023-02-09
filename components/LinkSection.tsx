import Image from 'next/image'
import React, { useState } from 'react'
import inputBackground from '../public/assets/images/bg-shorten-desktop.svg'
import LinkItem from './LinkItem'

type Link = {
    link: {
        url: {
            status: number
            fullLink: string
            date: string
            shortLink: string
            title: string
        }
    }
}

const LinkSection = () => {
    const [copied, setCopied] = useState('')
    const [input, setInput] = useState<string>('')
    const [links, setLinks] = useState<Link[]>([])
    const setCopiedItem = (link: string): void => {
        setCopied(link)
    }
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        // TODO Link verification /REGEX/
        e.preventDefault()
        const url = process.env.NEXT_PUBLIC_HOST_URL
        const response: Link = await fetch(`${url}/api/getshortlink`, {
            headers: {
                url: input,
            },
        }).then((res) => res.json())
        if (response !== undefined) setLinks((prev) => [...prev, response])
        setInput('')
    }
    return (
        <div className="w-full bg-[#f0f1f7] mt-10">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col space-y-3">
                {/* Background */}
                <div className="w-full h-28 flex relative items-center z-10 bg-[#3a3053] px-10 rounded-xl transition translate-y-[-50%]">
                    <Image
                        src={inputBackground}
                        fill
                        alt=""
                        style={{ objectFit: 'cover' }}
                        className="-z-10 rounded-xl "
                    />
                    {/* Input */}
                    <form
                        onSubmit={submitHandler}
                        className="w-full flex space-x-4"
                    >
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            type="text"
                            placeholder="Shorten a link here..."
                            className="h-10 flex-grow rounded-lg p-4"
                        />
                        <button
                            type="submit"
                            className="text-white font-bold rounded-lg bg-[#2bd1cf] px-5 h-10 hover:bg-[#2bd1cf]/70 whitespace-nowrap"
                        >
                            Shorten it!
                        </button>
                    </form>
                </div>
                {/* Conditional Links */}
                <div className="space-y-3 w-full">
                    {links.length > 0 &&
                        links.map((link, i) => (
                            <LinkItem
                                key={i}
                                fullLink={link.link.url.fullLink}
                                shortLink={link.link.url.shortLink}
                                setCopiedItem={setCopiedItem}
                                copied={link.link.url.shortLink === copied}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default LinkSection
