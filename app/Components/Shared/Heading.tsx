import React from 'react'

const Heading = ({txt}:{txt:string}) => {
  return (
    <div className='bg-[#E7E4F8] py-6  mt-14 flex flex-col justify-center items-center'>
    <h1 className='text-3xl  text-[#1A0B5B] font-bold font-serif capitalize'>
       All {txt}s
    </h1>
    <p className='text-[#FB2E86] font-sans font-semibold mt-5'>Best Furniture For Your Castle...</p>
</div>
  )
}

export default Heading
