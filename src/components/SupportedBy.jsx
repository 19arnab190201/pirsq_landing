import React from "react";
import support1 from "../assets/2.jpg";
import support2 from "../assets/3.jpg";
const SupportedBy = () => {
  return (
    <section className='bg-white light:bg-gray-900'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-24 lg:px-6'>
        <div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
          <h2 className='mb-4 text-3xl font-extrabold tracking-tight text-gray-900 light:text-white'>
            Strengthened by Professional Support and Endorsement.
          </h2>
          <p className='mb-5 font-light text-gray-500 sm:text-xl light:text-gray-400'>
            Our services are strengthened by the reliable support and
            endorsement of our professional team, ensuring a top-notch
            experience for all.
          </p>
        </div>
        <div className='space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 '>
          <div className='flex items-center justify-center w-2/4  mx-auto rounded-full'>
            <img src={support1} alt='' />
          </div>
          <div className='flex items-center justify-center w-3/4  mx-auto rounded-full'>
            <img src={support2} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;
