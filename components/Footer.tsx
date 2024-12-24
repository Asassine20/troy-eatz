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
                        <Image src="https://utfs.io/f/7LRLp6c9mzQV3JxiYnksejPmg8NLUXJTqSay4tD6cEIMBY2Z" width={100} height={50} alt="logo" />
                    </div>
                    <ul className="mt-8 flex justify-start gap-6 sm:mt-0 sm:justify-end">
                        <li>
                            <a
                                href="https://www.instagram.com/raniya_abro/"
                                rel="noreferrer"
                                target="_blank"
                                className="transition hover:opacity-75"
                            >
                                <span className="sr-only">Instagram</span>
                                <SiInstagram />
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="grid grid-cols-1 gap-8 border-t light:border-gray-900 dark:border-gray-700 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
                    
                
                    <div>
                        <p className="font-medium">Helpful Links</p>
                        <ul className="mt-6 space-y-4 text-sm">
                            <li>
                                <a target="_blank" href="https://www.doordash.com/store/troy-eatz-troy-29736891/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJ0cm95IGVhdHoiLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoidHJveSBlYXR6IiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTc3LDE5MywxOTVdfQ==&pickup=false" className=" transition hover:opacity-75">
                                    DoorDash
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="https://www.google.com/search?gl=US&tbm=shop&sfm=ChoIvOyQixQQvevJ48a06uZOOJPS4fn0uoCACBgBIAs%3D&lsf=seller:5392053820,store:5678381228843234749,store_mid:576462776562116883&sts=11&q=gum,+candy+%26+chocolate&tbs=vw:g&sa=X&ved=2ahUKEwj834HNiK2KAxULGAoDHXJeEvQQz5oGegQIAhAH" className=" transition hover:opacity-75">
                                    Products
                                </a>
                            </li>
                            <li>
                                <a target ="_blank" href="https://www.michiganlottery.com/" className=" transition hover:opacity-75">
                                    Lottery
                                </a>
                            </li>
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
                                888 W Big Beaver Rd #112<br></br>
                                Troy, MI 48084<br></br>
                                <small>*Inside Trion Building</small>
                            </li>

                        </ul>
                    </div>
                </div>

                <div className='flex flex-col gap-4 justify-between'>
                    <p className="text-xs text-gray-500">
                        &copy; 2025. Troy Eatz. All rights reserved.
                    </p>
                    <Link href="https://targetrankseo.com" target='_blank'>
                        <p className="text-xs text-gray-500">
                            Web Design & SEO by <span className='font-bold hover:underline hover:underline-offset-1'>Target Rank SEO</span>.
                        </p>
                    </Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;