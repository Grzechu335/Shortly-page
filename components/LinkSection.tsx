import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import inputBackground from '../public/assets/images/bg-shorten-desktop.svg'
import LinkItem from './LinkItem'
import validator from 'validator'

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

//TODO Submiting doesn't work on mobile

const LinkSection = () => {
    const [copied, setCopied] = useState('')
    const [input, setInput] = useState<string>('')
    const [links, setLinks] = useState<Link[]>([])
    const [isValid, setIsValid] = useState<boolean>(true)

    const validateFunction = () => {
        if (input === '') setIsValid(true)
        else if (validator.isURL(input)) setIsValid(true)
        else setIsValid(false)
    }
    useEffect(validateFunction, [input])

    const setCopiedItem = (link: string): void => {
        setCopied(link)
    }

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (validator.isURL(input)) {
            const url = process.env.NEXT_PUBLIC_HOST_URL
            const response: Link = await fetch(`${url}/api/getshortlink`, {
                headers: {
                    url: input,
                },
            }).then((res) => res.json())
            if (response !== undefined) setLinks((prev) => [...prev, response])
            setInput('')
        } else {
            return
        }
    }
    return (
        <div className="w-full bg-[#f0f1f7] mt-10 pb-8 sm:pb-28">
            <div className="max-w-screen-xl mx-auto px-4 flex flex-col space-y-3">
                {/* Background */}
                <div className="w-full flex relative items-center z-10 bg-[#3a3053] px-10 rounded-xl transition translate-y-[-50%] py-6 sm:py-6">
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
                        className="w-full flex  flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 "
                    >
                        <input
                            name="linkInput"
                            required
                            id="linkInput"
                            value={input}
                            onChange={inputHandler}
                            type="text"
                            placeholder="Shorten a link here..."
                            className="h-10 sm:flex-grow rounded-lg p-4"
                        />
                        {!isValid && (
                            <p className="text-red-500 italic text-xs absolute bottom-1 left-1/2 sm:left-6 transform translate-x-[-50%] sm:translate-x-0">
                                Type correct URL
                            </p>
                        )}
                        <button
                            type="submit"
                            className="text-white font-bold rounded-lg bg-[#2bd1cf] px-5 h-10 hover:bg-[#2bd1cf]/70 whitespace-nowrap"
                        >
                            Shorten it!
                        </button>
                    </form>
                </div>
                {/* Conditional Links */}
                <div className="space-y-6 w-full">
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
