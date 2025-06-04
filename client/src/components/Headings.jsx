import React from 'react'

function Headings({header, paragraph}) {
  return (
    <>
        <section className='text-center lg:w-[628px]'>
            <h4 className='text-[40px] text-white leading-[122%] tracking-[-2%] font-500'>{header}</h4>
            <p className='text-[20px] text-white leading-[122%] tracking-[-2%] font-400'>{paragraph}</p>

        </section>
    </>
  )
}

export default Headings