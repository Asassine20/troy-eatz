import Image from "next/image";
import Head from "next/head";
import Link from "next/link";

const Lottery = () => {
    return (
        <>
            {/* SEO Metadata */}
            <Head>
                <title>Lottery Tickets | Powerball, Mega Millions, and More - Troy Eatz</title>
                <meta
                    name="description"
                    content="Try your luck at Troy Eatz in Troy, Michigan! We offer Powerball, Mega Millions, Keno, Fantasy 5, Lotto 47, Cash Pop, and instant scratch-off tickets."
                />
                <meta
                    name="keywords"
                    content="lottery tickets Troy MI, Powerball tickets, Mega Millions, scratch-offs, Keno, Lotto 47, Cash Pop, Michigan lottery games"
                />
            </Head>

            <section className="container px-6 py-10 mx-auto">
                {/* Title */}
                <div className="mt-[1rem]">
                    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                        Play the Lottery at Troy Eatz
                    </h1>
                    <p className="leading-7 mt-6">
                        Feeling lucky? Stop by <strong>Troy Eatz</strong>, your local convenience store in Troy, Michigan, for a wide range of lottery games. From big jackpots like Powerball and Mega Millions to daily draws and scratch-off tickets, we got your winning ticket waiting!
                    </p>
                </div>

                {/* Section 1: Major Lottery Games */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Major Jackpot Games</h2>
                    <p className="mt-4 leading-7">
                        Dream big with multi-state jackpot games like <strong>Powerball</strong> and <strong>Mega Millions</strong>. These games offer life-changing prizes, with drawings held multiple times a week.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVdAaY4AoQOpE8UCNI65RqKvtw70SeJ3PHf4Vm"
                                alt="Powerball Ticket"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVDQoWNUnT2NW5k7SoPcyab1XdE63YlM89HGzO"
                                alt="Mega Millions Ticket"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 2: Michigan Lottery Games */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Michigan Lottery Games</h2>
                    <p className="mt-4 leading-7">
                        Play local favorites like Keno, Fantasy 5, Lotto 47, and daily draw games including Daily 3, Daily 4, and Cash Pop. With frequent drawings, there is always a chance to win!
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQV2lLwj7VYvsdJLDr6XtIyi2u57Sa14oAK9UlR"
                                alt="Keno Ticket"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVpJ3W0tVGSrUw8Ib3kZ7OYETPzV2voB9uFgd5"
                                alt="Fantasy 5 Ticket"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Section 3: Instant Scratch-Offs */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Instant Scratch-Off Tickets</h2>
                    <p className="mt-4 leading-7">
                        Cannot wait for the next draw? Try your luck with instant scratch-off tickets! We carry a variety of games, including Fast Cash options, for quick and exciting wins.
                    </p>
                    <div className="grid gap-6 mt-6 sm:grid-cols-1 lg:grid-cols-2">
                        <div className="relative w-full h-64">
                            <Image
                                src="https://utfs.io/f/7LRLp6c9mzQVzZMlpm9DIomHOyQE05YN1UPAglfxW87qdSpk"
                                alt="Scratch-Off Tickets"
                                layout="fill"
                                objectFit="cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Local SEO: Call-to-Action */}
                <div className="mt-10">
                    <h2 className="text-2xl font-semibold">Visit Troy Eatz for Your Lottery Tickets</h2>
                    <p className="mt-4 leading-7">
                        Stop by <strong>Troy Eatz</strong>, located at 888 W Big Beaver Rd #112, Troy, Michigan, to pick up your lottery tickets today. Whether you're aiming for a big jackpot or testing your luck with scratch-offs, we’re here to help you play.
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

export default Lottery;
