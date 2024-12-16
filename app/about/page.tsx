import Image from "next/image";

const AboutUs = () => {
    return (
        <section className="container px-6 py-10 mx-auto">
            <div className="mt-[1rem]">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    About Us
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Welcome to Troy Eatz, a unique convenience store located in the heart of downtown Troy within the Trion Building. Troy Eatz is more than just a store—it’s a labor of love, vision, and determination from its founder and sole operator, Raniya Abro.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    <strong>Meet Raniya Abro</strong><br />
                    Raniya is a proud, self-made business owner and caterer with a passion for building connections through food and hospitality. Her journey is one of resilience and ambition, driven by the goal of creating a welcoming space that goes beyond the typical convenience store experience.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    <strong>Our Mission</strong><br />
                    At Troy Eatz, our mission is to serve the workers of the Trion Building and the people of Troy with more than just food, drinks, and snacks. We aim to bring a smile to your face with every visit, whether you're stopping by for a cup of coffee, grabbing a quick bite, or just enjoying the friendly atmosphere.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    Raniya believes in fostering a fun and happy environment—not just for her customers, but also for the community around her. Every detail of Troy Eatz reflects her dedication to quality, care, and the spirit of togetherness.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    <strong>More Than a Store</strong><br />
                    Troy Eatz offers a wide variety of products, from snacks and drinks to lottery tickets and essentials, but what sets us apart is the personal touch that Raniya brings to every aspect of the store. This is more than a place to grab what you need—it’s a community hub where warmth, joy, and convenience come together.
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    We’re proud to serve the vibrant city of Troy and look forward to welcoming you to Troy Eatz. Stop by, say hello, and let us brighten your day!
                </p>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    <strong>Visit us at:</strong><br />
                    888 W Big Beaver Rd #112, Troy, MI 48084<br />
                    <small>*Inside the Trion Building.</small>
                </p>
            </div>
        </section>
    );
}

export default AboutUs;
