import ServiceSchedule from '@/components/ServiceSchedule'
import ChurchCard from '@/components/card/ChurchCard'
import Hero from '@/components/hero/Hero'


export default async function Home() {
  return (
    <main className="flex min-w-screen flex-col items-center justify-between">
      <Hero />
      <div className='flex flex-col mt-[4rem] text-center mb-12 p-3 sm:md:w-[100%] md:w-[60%]'>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-4xl">
          One stop shop for all your cravings
        </h1>
        <p className='mt-[1rem]'>Our Church serves both English and Amharic speaking people, fostering unity in diversity through the language of faith in our Lord and Saviour Jesus Christ.</p>
      </div>
      <div className='flex flex-col lg:flex-row gap-9 px-3 mb-7'>
      </div>
      <ServiceSchedule />
    </main>
  )
}
