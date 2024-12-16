import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

interface HeroProps { }

const Hero: React.FC<HeroProps> = ({ }) => {
    return (
        <main className="relative flex flex-col items-center border-b w-full lg:py-[15rem] py-[11rem]">
            {/* Video Background */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover -z-10"
                src="https://utfs.io/f/7LRLp6c9mzQVVBFf6JtOe9wj8cB4CgqGd5Pri2z7IuNonlb0"
                autoPlay
                loop
                muted
            ></video>
            {/* Content */}
            <div className="relative z-10 text-center">
                <h1 className="scroll-m-20 text-6xl font-extrabold tracking-tight lg:text-6xl drop-shadow-lg text-white">
                    Troy Eatz
                </h1>
                <h4 className="scroll-m-20 text-2xl font-bold tracking-tight pt-2 drop-shadow-lg text-white">
                    Stop by for snacks, drinks, and lottery. <br></br>Located inside the Trion Building.
                </h4>
                <div className="flex gap-5 justify-center mt-4">
                    <Link
                        href="https://www.google.com/search?gl=US&tbm=shop&sfm=ChoIvOyQixQQvevJ48a06uZOOJPS4fn0uoCACBgBIAs%3D&lsf=seller:5392053820,store:5678381228843234749,store_mid:576462776562116883&sts=11&q=gum,+candy+%26+chocolate&tbs=vw:g&sa=X&ved=2ahUKEwj834HNiK2KAxULGAoDHXJeEvQQz5oGegQIAhAH"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button className="mt-3" variant="outline">Our Products</Button>
                    </Link>
                    <Link
                        href="https://www.doordash.com/store/troy-eatz-troy-29736891/?cursor=eyJzZWFyY2hfaXRlbV9jYXJvdXNlbF9jdXJzb3IiOnsicXVlcnkiOiJ0cm95IGVhdHoiLCJpdGVtX2lkcyI6W10sInNlYXJjaF90ZXJtIjoidHJveSBlYXR6IiwidmVydGljYWxfaWQiOi05OTksInZlcnRpY2FsX25hbWUiOiJhbGwifSwic3RvcmVfcHJpbWFyeV92ZXJ0aWNhbF9pZHMiOlsxLDQsMTc3LDE5MywxOTVdfQ==&pickup=false"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button variant="destructive" className="mt-3">
                            DoorDash
                        </Button>
                    </Link>
                </div>

            </div>
        </main>
    );
};

export default Hero;
