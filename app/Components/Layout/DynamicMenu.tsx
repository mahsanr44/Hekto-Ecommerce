'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Wrapper } from '../Shared/Wrapper';
import { AlignJustify, Menu, MoreVertical } from 'lucide-react';

const DynamicMenu = () => {
    let allLinks =[
        {name:" All Products",link:"/AllProducts"},
        {name:"Sofas",link:"/category/sofa"},
        {name:"Chairs",link:"/category/chair"},
      ];
      let [open,setOpen]=useState(false);
  return (
    <div>
         
      <div onClick={()=>setOpen(!open)} className='md:py-7 md:mx-5 mt-3 md:px-2 lg:px-12  md:justify-between md:items-center md:hidden text-3xl absolute right-8 top-6 cursor-pointer '>
      <AlignJustify name={open ? 'close':'menu'}></AlignJustify>
      </div>

      <ul className={` lg:space-x-16 md:space-x-7  bg-white  md:mr-0  md:flex md:items-center md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>

        {
          allLinks.map((item)=>(
            <li key={item.name} >
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default DynamicMenu
