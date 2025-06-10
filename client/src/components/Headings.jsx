import React from "react";

function Headings({ header, paragraph, btn1, btn2, h1color, pcolor }) {
  return (
    <>
      <section className="text-center p-4 mx-auto md:py-4 md:my-4 lg:w-[628px]">
        <h1
          className={`text-xl sm:text-3xl xl:text-[40px] ${h1color}    leading-[122%] tracking-[-2%] font-medium`}
        >
          {header}
        </h1>
        <p
          className={`text-sm sm:text-base lg:text-xl mt-1.5 ${pcolor} py-4  md:my-4 leading-[122%] tracking-[-2%] font-normal`}
        >
          {paragraph}
        </p>
        <div className="sm:p-3 bg-[#D9E9F7] flex justify-center items-center md:gap-3 rounded-4xl md:w-[337px] mx-auto">
          <button className="md:px-4 px-2 py-3 rounded-4xl md:py-4 hover:bg-[#357ABB]">
            {btn1}
          </button>
          <button className="md:px-4  px-2 py-3 rounded-4xl md:py-4 hover:bg-[#357ABB]">
            {btn2}
          </button>
        </div>
      </section>
    </>
  );
}

export default Headings;
