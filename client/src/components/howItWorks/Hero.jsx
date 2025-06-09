import React from 'react'

function Hero({h1, p}) {
  return (
    <section className='lg:h-[416px] bg-[#F1F7FC] py-5 '>
       <div className='md:w-[775px] text-center pb-24 pt-24  mx-auto p-4'>
       <h1 className='text-xl sm:text-3xl md:text-[56px] font-medium'>{h1}</h1>
       <p className='text-sm sm:text-xl mt-4'>{p}</p>
       </div>
    </section>
  )
}

export default Hero