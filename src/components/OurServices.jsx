import React from "react";

const OurServices = () => {
  return (
    <section className='bg-white light:bg-gray-900'>
      <div className='items-center max-w-screen-xl px-4 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:py-24 lg:px-6'>
        <div className='col-span-2 mb-8'>
          <p className='text-lg font-medium text-orange-400	'>Our Services</p>
          <h2 className='mt-3 mb-4 text-3xl font-extrabold tracking-tight text-gray-900 md:text-3xl light:text-white'>
            Transform Your Experience with Our Expert Solutions
          </h2>
          <p className='font-light text-gray-500 sm:text-xl light:text-gray-400'>
            Our rigorous security and compliance standards are at the heart of
            all we do. We work tirelessly to deliver you and your customers.
          </p>
          <div className='pt-6 mt-6 space-y-4 border-t border-gray-200 light:border-gray-700'>
            <div>
              <a
                href='#'
                className='inline-flex items-center text-base font-medium text-orange-400 hover:text-orange-500 '>
                Explore Legality Guide
                <svg
                  className='w-5 h-5 ml-1'
                  fill='#F27204'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'></path>
                </svg>
              </a>
            </div>
            <div>
              <a
                href='#'
                className='inline-flex items-center text-base font-medium text-orange-400 hover:text-orange-500 '>
                Visit the Trust Center
                <svg
                  className='w-5 h-5 ml-1'
                  fill='#F27204'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    fill-rule='evenodd'
                    d='M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z'
                    clip-rule='evenodd'></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className='col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0'>
          <div>
            <svg
              className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 light:text-purple-500'
              fill='#F27204'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z'
                clip-rule='evenodd'></path>
            </svg>
            <h3 className='mb-2 text-2xl font-bold light:text-white'>
              Big Data Analytics
            </h3>
            <p className='font-light text-gray-500 light:text-gray-400'>
              Right strategy to adopt the right Hadoop and Spark stack.
            </p>
          </div>
          <div>
            <svg
              className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 light:text-purple-500'
              fill='#F27204'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 256 238'
              xml:space='preserve'>
              <path
                d='M122.7,109.9l0.1-30.1c8.5,0,35.2-2.6,35.2,15.2C157.9,112,131.2,109.9,122.7,109.9z M164.8,141.8L164.8,141.8
	c0.1-19.5-32-16.7-42.2-16.7l-0.1,33.2C132.7,158.3,164.8,160.5,164.8,141.8z M10.6,119.9C10.6,54.9,62.8,2,127.8,2
	c65,0,117.5,52.5,117.5,117.5c0,65-52.9,117.5-117.5,117.5S10.6,184.6,10.6,119.9z M98.1,113.5c-0.5,0-1,0-1.6,0L96.3,153
	c-0.3,1.9-1.4,5-5.7,5c0.2,0.2-11,0-11,0l-3.1,18l19.6,0.1c3.7,0,7.2,0.1,10.8,0.1l-0.1,25l15.1,0.1l0.1-24.8
	c4.1,0.1,8.1,0.1,12,0.2l-0.1,24.7l15.1,0.1l0.1-25c25.3-1.4,43.1-7.7,45.4-31.5c1.8-19.2-7.1-27.7-21.5-31.2
	c8.8-4.4,14.2-12.2,13-25.3h0c-1.7-17.9-17-23.9-36.5-25.7l0.1-24.8l-15.1-0.1L134.5,62c-4,0-8,0.1-12,0.1l0.1-24.3l-15.1-0.1
	l-0.1,24.8c-3.3,0.1-6.5,0.1-9.6,0.1l0-0.1l-20.8-0.1L77,78.5c0,0,11.1-0.2,10.9,0c6.1,0,8.1,3.6,8.6,6.6l-0.1,28.2
	C96.9,113.4,97.5,113.4,98.1,113.5z'
              />
            </svg>
            <h3 className='mb-2 text-2xl font-bold light:text-white'>
              Blockchain
            </h3>
            <p className='font-light text-gray-500 light:text-gray-400'>
              Track your parcels, verify authenticity of documents, & many more.
            </p>
          </div>
          <div>
            <svg
              className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 light:text-purple-500'
              fill='#F27204'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z'
                clip-rule='evenodd'></path>
            </svg>
            <h3 className='mb-2 text-2xl font-bold light:text-white'>
              100+ countries
            </h3>
            <p className='font-light text-gray-500 light:text-gray-400'>
              Have used Landwind to create functional websites
            </p>
          </div>
          <div>
            <svg
              className='w-10 h-10 mb-2 text-purple-600 md:w-12 md:h-12 light:text-purple-500'
              fill='#F27204'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z'></path>
            </svg>
            <h3 className='mb-2 text-2xl font-bold light:text-white'>
              5+ Million
            </h3>
            <p className='font-light text-gray-500 light:text-gray-400'>
              Transactions per day
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
