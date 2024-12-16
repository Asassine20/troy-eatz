import Image from "next/image";

const AboutUs = () => {

    return (
        <section className='container px-6 py-10 mx-auto'>
            <div className='mt-[1rem]'>
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                    Our Vision
                </h1>
                <p className="leading-7 [&:not(:first-child)]:mt-6">
                    At Grace (ፀጋ) Bible Fellowship Church, we believe that the process of becoming a disciple of Jesus is a lifelong journey of growth and transformation.

                    Our vision is to create a dynamic fellowship of believers who seek to connect with God, grow in their relationship with Jesus Christ, and serve others with love and compassion. We aim to be a supportive community where people can explore their faith, deepen their understanding of the Bible, and learn how to apply its teachings to their everyday lives. Our goal is to help our members become fully devoted followers of Jesus and to empower them to lead and impact in every sphere of life.
                </p>

            </div>

        </section>
    );
}

export default AboutUs;