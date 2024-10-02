'use client'
import React from 'react'
import Image from 'next/image'
import Typewriter from 'typewriter-effect'

const Hero
 = () => {
  return (
    <div>
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I'm Abdul Qadeer
        <br className="hidden lg:inline-block" />
        <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer', 'E-Commerce Expert'],
    autoStart: true,
    loop: true,
  }}
/>
      </h1>
      <div className='w-[100px] h-[2px] bg-slate-600'></div>
      <p className="mb-8 leading-relaxed">
      I am a certified web developer specializing in HTML, CSS, TypeScript, React, and Next.js,
       with credentials from Governor House, crafting modern and dynamic digital experiences.
      </p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Contact
        </button>
        
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <Image
        className="object-cover object-center rounded"
        alt="Abdul Qadeer"
        width={500}
        height={500}
        src={require("../../../public/assissts/my pic.jpeg")}
      />
    </div>
  </div>
</section>


    </div>
  )
}

export default Hero
