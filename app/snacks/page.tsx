import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
const Snacks = () => {
    return (
        <>
            {/* SEO Metadata */}
            <Head>
                <title>Snacks | Troy Eatz - Troy, Michigan Convenience Store</title>
                <meta
                    name="description"
                    content="Explore a wide variety of snacks at Troy Eatz in Troy, Michigan. From Lays chips and Oreo cookies to M&Ms candy, beef sticks, popcorn, and ice cream."
                />
                <meta name="keywords" content="snacks in Troy MI, chips, cookies, candy, popcorn, ice cream, gum, mints, seeds, convenience store Troy Michigan" />
            </Head>

            <section className="container px-6 py-10 mx-auto">
                {/* Title */}
                <div className="mt-[1rem]">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Snacks at Troy Eatz
                    </h1>
                    <p className="leading-7 mt-6">
                        Craving a quick snack? At <strong>Troy Eatz</strong>, your local convenience store in Troy, Michigan, we offer a delicious selection of snacks that will hit the spot. From chips and cookies to candy and popcorn, we stock popular brands you know and love.
                    </p>
                </div>

                {/* Section 1: Chips and Cookies */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Chips and Cookies</h2>
                    <p className="mt-4 leading-7">
                        Satisfy your cravings with our selection of chips and cookies. We offer popular options like <strong>Lays</strong>, <strong>Doritos</strong>, and <strong>Cheetos</strong> for a savory bite, along with classic cookies including <strong>Oreos</strong> and <strong>Chips Ahoy</strong> for a sweet treat.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative w-full h-64">
                            <Image src="https://utfs.io/f/7LRLp6c9mzQVcqIuUcZdrp3DOPtRjZIEmuegTdQ68FNiVywS" alt="Lays Chips" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative w-full h-64">
                            <Image src="https://utfs.io/f/7LRLp6c9mzQVcu3U5Bdrp3DOPtRjZIEmuegTdQ68FNiVywSK" alt="Oreo Cookies" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>

                {/* Section 2: Candy and Beef Sticks */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Candy and Beef Sticks</h2>
                    <p className="mt-4 leading-7">
                        Treat yourself to favorites like <strong>M&Ms</strong>, <strong>Snickers</strong>, and <strong>Skittles</strong>. Need something savory? Grab a <strong>Jack Link’s Beef Stick</strong> or other protein-packed snacks.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative w-full h-64">
                            <Image src="https://utfs.io/f/7LRLp6c9mzQV8ppPBStAam4TboQzMWL7E5FdUKHyRZAtqX6P" alt="M&Ms Candy" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative w-full h-64">
                            <Image src="https://utfs.io/f/7LRLp6c9mzQVlAqjQ3Y1xQLpm29dMENwRDJ7uasch8ivBPW6" alt="Beef Sticks" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>

                {/* Section 3: Popcorn, Gum, and Mints */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Popcorn, Gum, and Mints</h2>
                    <p className="mt-4 leading-7">
                        Grab a bag of buttery popcorn, or freshen up with gum like <strong>Extra</strong> and mints like <strong>Altoids</strong>. Great for road trips, work breaks, or movie nights!
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative w-full h-64">
                            <Image src="https://utfs.io/f/7LRLp6c9mzQV1YfFSBGwarz32c6FpP0LmSjQV5AbNMfRYDWK" alt="Gum and Mints" layout="fill" objectFit="cover" />
                        </div>
                        <div className="relative w-full h-64">
                            <Image src="https://utfs.io/f/7LRLp6c9mzQVrs5oPNyGWthXTDeFpQnzN2gRbMUkJd7xyBEr" alt="Popcorn" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>

                {/* Section 4: Ice Cream */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Ice Cream</h2>
                    <p className="mt-4 leading-7">
                        Cool off with our selection of ice cream. We stock favorites like <strong>Ben & Jerry's</strong>, <strong>Häagen-Dazs</strong>, and classic ice cream sandwiches.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-1 lg:grid-cols-2">
                        <div className="relative w-full h-64">
                            <Image src="https://utfs.io/f/7LRLp6c9mzQVwhPWyg5d3QrStIEMeRD1XvobNOmhJYcF4Kxk" alt="Ice Cream" layout="fill" objectFit="cover" />
                        </div>
                    </div>
                </div>

                {/* Local SEO: Call-to-Action */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Visit Troy Eatz Today!</h2>
                    <p className="mt-4 leading-7">
                        Stop by <strong>Troy Eatz</strong> in Troy, Michigan, located inside the Trion Building at 888 W Big Beaver Rd #112. Whether you're craving chips, candy, or ice cream, we've got the snacks you love!
                    </p>
                    <p className="mt-2 leading-7">
                        <Link href="/about" className="text-blue-500 underline">
                            Learn more about us here.
                        </Link>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Snacks;
