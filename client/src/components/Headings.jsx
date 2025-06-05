import React from 'react'

function Headings({header, paragraph}) {
  return (
    <>
        <section className='text-center mx-auto md:py-4 md:my-4 lg:w-[628px]'>
            <h1 className='text-xl sm:text-3xl xl:text-[40px]  text-white leading-[122%] tracking-[-2%] font-medium'>{header}</h1>
            <p className='text-sm sm:text-base lg:text-xl mt-1.5 text-white  md:my-4 leading-[122%] tracking-[-2%] font-normal'>{paragraph}</p>

        </section>
    </>
  )
}

export default Headings