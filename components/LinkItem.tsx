import React from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

type Props = {
    fullLink: string
    shortLink: string
    setCopiedItem: (link: string) => void
    copied: boolean
}

const LinkItem = ({ fullLink, shortLink, setCopiedItem, copied }: Props) => {
    return (
        <div className="flex flex-col items-start gap-2 p-4 space-y-3 bg-white sm:flex-row sm:justify-between sm:items-center sm:space-y-0 rounded-xl">
            <div className="w-full text-sm font-bold">
                <p className="truncate">{fullLink}</p>
            </div>
            <span className="sm:hidden w-full h-[1px] bg-gray-300"></span>
            <div className="text-sm sm:ml-auto text-[#2bd1d0] cursor-pointer font-bold">
                <p>
                    <a
                        href={shortLink}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {shortLink}{' '}
                    </a>
                </p>
            </div>
            <div className="w-full sm:w-auto">
                <CopyToClipboard
                    text={shortLink}
                    onCopy={() => setCopiedItem(shortLink)}
                >
                    <button
                        className={`w-full sm:w-[100px] py-2 text-white rounded-lg font-bold sm:ml-6 ${
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
