import Image from 'next/image'
import Link from 'next/link'
import {FaCloudDownloadAlt} from 'react-icons/fa';
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-green-200'>
        <header className="text-[#9380db] body-font">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src={require("../../../public/assissts/logo.png")} alt='q.a' width={100} height={100}/>
      <span className="ml-3 text-xl">DeveOps</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-900">Home</Link>
      <Link href={"Services"} className="mr-5 hover:text-blue-900">Services</Link>
      <Link href={"Skills"} className="mr-5 hover:text-blue-900">Skills</Link>
      <Link href={"Contact"} className="mr-5 hover:text-blue-900">Contact Us</Link>
    </nav>
    <a href="">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">   
      Download CV
      <FaCloudDownloadAlt className='text-xl ml-2'/>
    </button>
    </a>
  </div>
</header>

    </div>
  )
}

export default Navbar