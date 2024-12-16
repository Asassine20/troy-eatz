import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaTiktok } from 'react-icons/fa';
import { BsYoutube } from 'react-icons/bs';
import { SiInstagram } from 'react-icons/si'

const Footer = ({ }) => {
    return (
        <footer className='border-t'>
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-teal-600">
                        <Image src="https://vngdsgitgimaumyqaatn.supabase.co/storage/v1/object/public/images/TBF.webp" width={50} height={50} alt="logo" />
                    </div>
                    <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="https://www.youtube.com/@tsegabiblefellowshipchurch"
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75"
                            >
                                <span className="sr-only">YouTube</span>
                                <BsYoutube />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/tbfchurch/"
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75"
                            >
                                <span className="sr-only">Instagram</span>
                                <SiInstagram />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.tiktok.com/@tbfchurch"
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75"
                            >
                                <span className="sr-only">Tiktok</span>
                                <FaTiktok />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 gap-8 border-t light:border-gray-900 dark:border-gray-700 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
                    
                
                    <div>
                        <p className="font-medium">Helpful Links</p>

                        <ul className="mt-6 space-y-4 text-sm">

                            <li>
                                <a href="/about" className=" transition hover:opacity-75">
                                    About Us
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <p className="font-medium">Located At</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                888 W Big Beaver Rd #112.<br></br>
                                Troy, MI 48084
                            </li>

                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-4 justify-between'>
                    <p className="text-xs text-gray-500">
                        &copy; 2025. Troy Eatz. All rights reserved.
                    </p>
                    <Link href="https://www.exoduslabs.xyz" target='_blank'>
                        <p className="text-xs text-gray-500">
                            Built by <span className='font-bold hover:underline hover:underline-offset-1'>Exodus Labs</span>.
                        </p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;