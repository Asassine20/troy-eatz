import ServiceSchedule from '@/components/ServiceSchedule'
import Hero from '@/components/hero/Hero'

export default async function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <Hero />
      <div className='flex flex-col mt-[4rem] text-center mb-12 p-3 sm:md:w-[100%] md:w-[60%]'>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          Welcome to Troy Eatz
        </h1>
        <p className='mt-[1rem]'>
          Located in the heart of downtown Troy, MI inside the Trion Building, Troy Eatz is your one-stop convenience store for all your needs. Whether you&#39;re grabbing a quick bite, refreshing drink, hot coffee, or lottery, we&rsquo;ve got you covered. Stop by and explore our wide selection of snacks, beverages, and more!
        </p>
      </div>
      <div className='flex flex-col lg:flex-row gap-9 px-3 mb-7'>
      </div>
      <ServiceSchedule />
    </main>
  );
}

