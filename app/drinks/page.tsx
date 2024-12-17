import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Drinks = () => {
    return (
        <>
            {/* SEO Metadata */}
            <Head>
                <title>Drinks | Troy Eatz - Beverages in Troy, Michigan</title>
                <meta
                    name="description"
                    content="Discover a wide selection of drinks at Troy Eatz in Troy, Michigan, including energy drinks, coffee, pop, juice, and vitamin water. Refresh and energize today!"
                />
                <meta
                    name="keywords"
                    content="drinks in Troy MI, energy drinks, coffee, pop, juice, vitamin water, beverages Troy Michigan convenience store"
                />
            </Head>

            <section className="container px-6 py-10 mx-auto">
                {/* Title */}
                <div className="mt-[1rem]">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Drinks at Troy Eatz
                    </h1>
                    <p className="leading-7 mt-6">
                        Stay refreshed and energized with our diverse range of beverages. Whether you need a morning boost, a mid-day pick-me-up, or a cool refreshment, we got you covered with popular choices like energy drinks, coffee, pop, juice, and vitamin water.
                    </p>
                </div>

                {/* Section 1: Energy Drinks */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Energy Drinks</h2>
                    <p className="mt-4 leading-7">
                        Power through your day with favorites like <strong>Red Bull</strong>, <strong>Monster</strong>, and <strong>Bang Energy</strong>. Perfect for staying energized during work or workouts.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVr9kTh31yGWthXTDeFpQnzN2gRbMUkJd7xyBE"
                                alt="Monster Energy Drink"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQV0nq1TfKVPIkFqnlSOx7rLuEJaz5jHM2YcvAd"
                                alt="Red Bull Energy Drink"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Coffee */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Coffee</h2>
                    <p className="mt-4 leading-7">
                        Need a caffeine fix? Grab a cup of rich and aromatic coffee, including options from <strong>Starbucks</strong> and <strong>Fresh Brewed Coffee</strong>, to keep you going throughout the day.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVJm1itId8x4iqulQKcS9dZE58kRyCFVDpjUge"
                                alt="Coffee"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQV2lYAra7VYvsdJLDr6XtIyi2u57Sa14oAK9Ul"
                                alt="Starbucks Coffee"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 3: Pop and Juice */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Pop and Juice</h2>
                    <p className="mt-4 leading-7">
                        Cool off with refreshing pop like <strong>Coca-Cola</strong>, <strong>Pepsi</strong>, and <strong>Sprite</strong>, or enjoy natural juices like <strong>Minute Maid</strong> and <strong>Tropicana</strong>.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQV2dvABjc7VYvsdJLDr6XtIyi2u57Sa14oAK9U"
                                alt="Coca-Cola Pop"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVQk4yOnBhg6n4OkdefJNEUzZrPGqaWiKuT91D"
                                alt="Pepsi Soda"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 4: Vitamin Water */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Vitamin Water</h2>
                    <p className="mt-4 leading-7">
                        Stay hydrated and healthy with <strong>Vitamin Water</strong> and other enhanced beverages, perfect for a balanced refreshment.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-1 lg:grid-cols-2">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQV2VveZO7VYvsdJLDr6XtIyi2u57Sa14oAK9Ul"
                                alt="Vitamin Water"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Local SEO: Call-to-Action */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Visit Troy Eatz Today!</h2>
                    <p className="mt-4 leading-7">
                        Find your favorite beverages at <strong>Troy Eatz</strong>, your go-to convenience store in Troy, Michigan, located inside the Trion Building at 888 W Big Beaver Rd #112. Stop by for energy drinks, coffee, and refreshing juices!
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

export default Drinks;
