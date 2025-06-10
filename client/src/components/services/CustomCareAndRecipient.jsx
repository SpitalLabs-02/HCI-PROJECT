import React from "react";
import { Link } from "react-router";

function CustomCareAndRecipient({
  role,
  h1,
  p,
  link,
  divClassName,
  img,
  imgWidth,
  datas,
}) {
  return (
    <section className="md:px-12 md:my-6">
      <div className={`${divClassName} container mx-auto`}>
        <img src={img} className={imgWidth} alt="" />
        <div className=" md:w-[565px] px-4 flex flex-col gap-4">
          <h4 className="border border-[#357ABB] mx-auto sm:mx-0  px-2 py-1 text-center w-[172px] rounded-xl text-[#357ABB] bg-[#F9FAFB]">
            {role}
          </h4>
          <h1 className="md:text-[40px] font-medium">{h1}</h1>
          <p>{p}</p>
          <div>
            {datas.map((data, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row text-center sm:text-left justify-center gap-3 items-center"
              >
                <p className="bg-[#F1F7FC]  text-[#357ABB] p-2 text-2xl rounded-full">
                  {data.icon}
                </p>
                <div>
                  <h6 className="text-2xl">{data.h6}</h6>
                  <p className="text-[#434343] mb-2 text-lg">{data.p}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            className="border mx-auto sm:mx-0  border-amber-50 text-center px-3 py-2 bg-[#357ABB] rounded-3xl text-[#F9FAFB] w-[217px]"
            to={""}
          >
            {link}
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CustomCareAndRecipient;
