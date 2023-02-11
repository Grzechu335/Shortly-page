import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import inputBackground from '../public/assets/images/bg-shorten-desktop.svg'
import LinkItem from './LinkItem'
import validator from 'validator'

type Link = {
    url: {
        status: number
        fullLink: string
        date: string
        shortLink: string
        title: string
    }
}

type Response = {
    data: Link
    message?: string
}

const LinkSection = () => {
    const [copied, setCopied] = useState('')
    const [input, setInput] = useState<string>('')
    const [links, setLinks] = useState<Link[]>([])
    const [isValid, setIsValid] = useState<boolean>(true)
    const [toManyReq, setToManyReq] = useState<boolean>(false)
    const [linkAlreadyShortened, setLinkAlreadyShortened] =
        useState<boolean>(false)

    const validateFunction = () => {
        if (input === '') setIsValid(true)
        else if (validator.isURL(input)) {
            if (input.includes('https://cutt.ly/')) {
                setLinkAlreadyShortened(true)
            } else {
                setIsValid(true)
                setLinkAlreadyShortened(false)
            }
        } else setIsValid(false)
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
            if (linkAlreadyShortened) {
                return
            }
            try {
                const response: Response = await fetch('/api/getshortlink', {
                    headers: {
                        url: input,
                    },
                }).then((res) => res.json())
                if (response !== undefined) {
                    if (response.message === 'to many request') {
                        setToManyReq(true)
                        return
                    } else {
                        setLinks((prev) => [...prev, response.data])
                        setInput('')
                        setToManyReq(false)
                    }
                }
            } catch (err) {
                console.error(err)
            }
        } else {
            return
        }
    }
    return (
        <div className="w-full bg-[#f0f1f7] mt-10 pb-8 sm:pb-28">
            <div className="flex flex-col max-w-screen-xl px-4 mx-auto space-y-3">
                {/* Background */}
                <div className="w-full flex relative items-center z-10 bg-[#3a3053] px-10 rounded-xl transition translate-y-[-50%] py-6 sm:py-12">
                    <Image
                        src={inputBackground}
                        fill
                        alt=""
                        style={{ objectFit: 'cover' }}
                        className="-z-10 rounded-xl "
                    />
                    {/* Input */}
                    <form
                        id="form"
                        onSubmit={submitHandler}
                        className="flex flex-col w-full space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 "
                    >
                        <input
                            required
                            value={input}
                            onChange={inputHandler}
                            type="text"
                            placeholder="Shorten a link here..."
                            className="h-10 p-4 rounded-lg sm:flex-grow"
                        />
                        {!isValid && (
                            <p className="text-red-500 italic text-xs absolute bottom-1 left-1/2 sm:left-6 transform translate-x-[-50%] sm:translate-x-0">
                                Type correct URL
                            </p>
                        )}
                        {toManyReq && (
                            <p className="text-red-500 italic text-xs absolute bottom-1 left-1/2 sm:left-6 transform translate-x-[-50%] sm:translate-x-0 whitespace-nowrap">
                                Too many requests, try again later
                            </p>
                        )}
                        {linkAlreadyShortened && (
                            <p className="text-red-500 italic text-xs absolute bottom-1 left-1/2 sm:left-6 transform translate-x-[-50%] sm:translate-x-0 whitespace-nowrap">
                                Link is already shortened
                            </p>
                        )}
                        <button
                            form="form"
                            type="submit"
                            className="text-white font-bold rounded-lg bg-[#2bd1cf] px-5 h-10 hover:bg-[#2bd1cf]/70 whitespace-nowrap"
                        >
                            Shorten it!
                        </button>
                    </form>
                </div>
                {/* Conditional Links */}
                <div className="w-full space-y-6">
                    {links.length > 0 &&
                        links.map((link, i) => (
                            <LinkItem
                                key={i}
                                fullLink={link?.url.fullLink}
                                shortLink={link?.url.shortLink}
                                setCopiedItem={setCopiedItem}
                                copied={link?.url.shortLink === copied}
                            />
                        ))}
                </div>
            </div>
        </div>
    )
}

export default LinkSection
