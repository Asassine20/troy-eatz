import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Vapes = () => {
    return (
        <>
            {/* SEO Metadata */}
            <Head>
                <title>Vapes | Breeze & Mr Vapor in Troy, Michigan - Troy Eatz</title>
                <meta
                    name="description"
                    content="Explore a variety of vapes at Troy Eatz in Troy, Michigan. Featuring popular options like Breeze and Mr Vapor for smooth, flavorful vaping experiences."
                />
                <meta
                    name="keywords"
                    content="vapes in Troy MI, Breeze vapes, Mr Vapor, vape store Troy Michigan, convenience store vapes, Troy vape products"
                />
            </Head>

            <section className="container px-6 py-10 mx-auto">
                {/* Title */}
                <div className="mt-[1rem]">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Breeze & Mr Vapor Vapes
                    </h1>
                    <p className="leading-7 mt-6">
                        Discover premium vaping options at <strong>Troy Eatz</strong> in Troy, Michigan. We carry top-rated products like Breeze and Mr Vapor, offering smooth, satisfying, and flavorful alternatives to traditional tobacco.
                    </p>
                </div>

                {/* Section 1: Breeze Vapes */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Breeze Vapes</h2>
                    <p className="mt-4 leading-7">
                        Breeze vapes are known for their sleek design, long-lasting performance, and smooth flavors. Whether you prefer fruity, minty, or classic tobacco options, Breeze offers something for everyone.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-1 lg:grid-cols-2">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVhmrYgbLgFCDK5snuzRG4mXJQ7TBVowLEHIP0"
                                alt="Breeze Vape Products"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Mr Vapor */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Mr Vapor</h2>
                    <p className="mt-4 leading-7">
                        Experience the convenience and quality of Mr Vapor vapes, offering rich flavors and a satisfying draw. Popular for their portability and variety, Mr Vapor is a go-to choice for vape enthusiasts.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-1 lg:grid-cols-2">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVB2oLOxPbb8sLc0h7JpCIexwFkgrNjdTAH916"
                                alt="Mr Vapor Vape Products"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Local SEO: Call-to-Action */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Visit Troy Eatz for Breeze & Mr Vapor Vapes</h2>
                    <p className="mt-4 leading-7">
                        Looking for high-quality vapes in Troy, Michigan? Visit <strong>Troy Eatz</strong>, conveniently located in the Trion Building at 888 W Big Beaver Rd #112. We stock popular vape options like Breeze and Mr Vapor, ensuring you find the perfect fit for your preferences.
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

export default Vapes;
