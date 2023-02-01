import React from "react";

const ContactUs = () => {
  return (
    <section className='bg-gray-50 light:bg-gray-800'>
      <div className='max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6'>
        <div className='max-w-screen-sm mx-auto text-center'>
          <h2 className='mb-4 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 light:text-white'>
            Reach Out to Us for Assistance.
          </h2>
          <p className='mb-6 font-light text-gray-500 light:text-gray-400 md:text-lg'>
            Get in Touch with Us for Personalized Assistance and Support.
          </p>
        </div>
        <div className='px-72'>
          <form>
            <div class='flex flex-col md:flex-col flex-col'>
              <div class='mb-4 md:mb-5'>
                <input
                  class='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
                  type='text'
                  placeholder='Name'
                />
              </div>
              <div class='mb-4 md:mb-5'>
                <input
                  class='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
                  type='email'
                  placeholder='Email'
                />
              </div>
            </div>
            <div class='mb-4 md:mb-5'>
              <input
                class='bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal'
                type='text'
                placeholder='Phone Number'
              />
            </div>
            <div class='mb-4'>
              <textarea
                class=' bg-white focus:outline-none focus:shadow-outline border border-gray-300 rounded-lg py-2 px-4 block w-full appearance-none leading-normal h-32'
                placeholder='Message'></textarea>
            </div>
            <button
              style={{ backgroundColor: "#F27204" }}
              class='w-1/4 text-white font-bold py-2 px-4 rounded-full'
              type='submit'>
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
