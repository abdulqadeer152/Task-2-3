import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='bg-gray-300'>
        <footer className="text-gray-600 body-font">
  <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
    <Image src={require("../../../public/assissts/logo.png")} alt='q.a' width={50} height={50}/>
      <span className="ml-3 text-xl">Rising Talend</span>
    </a>
    <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
      © 2024 Q.A DevOps —
      <a
        href="https://twitter.com/knyttneve"
        className="text-gray-600 ml-1"
        rel="noopener noreferrer"
        target="_blank"
      >
        
      </a>
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      <Link href={"#"} className="text-gray-500">
        <BsYoutube className='text-3xl hover:text-[#ff0000]'/>
      </Link>
    </span>
  </div>
</footer>

    </div>
  )
}

export default Footer