import React from 'react'

const Button = ({txt}:{txt:string}) => {
    return (
        <div>
            <button className='bg-[#FB2E86] p-2 text-white rounded-sm font-sans px-4'>{txt}</button>
        </div>
    )
}

export default Button
