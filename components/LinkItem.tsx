import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

type Props = {
    fullLink: string
    shortLink: string
    setCopiedItem: (link: string) => void
    copied: boolean
}

const LinkItem = ({ fullLink, shortLink, setCopiedItem, copied }: Props) => {
    return (
        <div className="flex p-4 gap-2 items-center bg-white rounded-xl">
            <div className="w-1/2 font-bold text-sm">
                <p>{fullLink}</p>
            </div>
            <div className="w-1/2 text-sm ml-auto text-[#2bd1d0] cursor-pointer font-bold flex justify-end items-center space-x-4">
                <p>{shortLink}</p>
                <CopyToClipboard
                    text={shortLink}
                    onCopy={() => setCopiedItem(shortLink)}
                >
                    <button
                        className={` w-[100px] py-2 text-white rounded-lg ${
                            copied ? 'bg-[#3b3053]' : 'bg-[#2bd1d0] '
                        }`}
                    >
                        {copied ? 'Copied!' : 'Copy'}
                    </button>
                </CopyToClipboard>
            </div>
        </div>
    )
}

export default LinkItem
