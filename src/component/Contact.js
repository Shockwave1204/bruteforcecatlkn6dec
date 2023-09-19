import React from 'react';

function Contact() {
 return (
  <section className="">
   <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <div className="mb-4">
     <div className="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
      <p className="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
       Contact
      </p>
      <h2 className="font-heading mb-4 font-bold tracking-tight  text-3xl sm:text-5xl">
       Get in Touch
      </h2>

     </div>
    </div>
    <div className="flex items-stretch justify-center">
     <div className="grid md:grid-cols-2">
      <div className="h-full pr-6">
       <p className="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
        You can contact with via facebook, phone-number, email etc. When you want to contact with
        me feel free to message me using your name,email. I'll try my best to contact with you ASAP!
       </p>
       <ul className="mb-6 md:mb-0">
        <li className="flex">
         <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
           fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
           strokeLinejoin="round" className="h-6 w-6">
           <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
           <path
            d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
           </path>
          </svg>
         </div>
         <div className="ml-4 mb-4">
          <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Address
          </h3>
          <p className="text-gray-600 dark:text-slate-400">PS-1340, Soronika Savar Dhaka</p>
          <p className="text-gray-600 dark:text-slate-400">Dhaka, Bangladesh</p>
         </div>
        </li>

        <li className="flex">
         <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
          <svg
           xmlns="http://www.w3.org/2000/svg"
           width="24"
           height="24"
           viewBox="0 0 24 24"
           fill="none"
           stroke="currentColor"
           strokeWidth="2"
           strokeLinecap="round"
           strokeLinejoin="round"
           className="h-6 w-6"
          >
           <path
            d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"
           />
           <path d="M15 7a2 2 0 0 1 2 2"></path>
           <path d="M15 3a6 6 0 0 1 6 6"></path>
          </svg>
         </div>
         <div className="ml-4 mb-4">
          <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
          </h3>
          <p className="text-gray-600 dark:text-slate-400">Phone number - +8801967469726</p>
          <p className="text-gray-600 dark:text-slate-400">Email - likhon15-3916@diu.edu.bd</p>
         </div>
        </li>


        {/* Add more list items here */}
       </ul>
      </div>
      <div className="card h-fit max-w-6xl p-5 md:p-12" id="form">
       <h2 className="mb-4 text-2xl font-bold">Send me a message</h2>
       <form id="contactForm">
        <div className="mb-6">
         <div className="mx-0 mb-1 sm:mb-4">
          <div className="mx-0 mb-1 sm:mb-4">
           <label htmlFor="name" className="pb-1 text-xs uppercase tracking-wider"></label>
           <input type="text" placeholder="Your name" className="input input-bordered w-full input-secondary" />
          </div>
          <div className="mx-0 mb-1 sm:mb-4">
           <label htmlFor="email" className="pb-1 text-xs uppercase tracking-wider"></label>
           <input type="text" placeholder="Your email" className="input input-bordered input-secondary w-full" />
          </div>
         </div>
         <div className="mx-0 mb-1 sm:mb-4">
          <label htmlFor="textarea" className="pb-1 text-xs uppercase tracking-wider"></label>
          <textarea className="textarea textarea-bordered textarea-secondary w-full"
           style={{ height: '110px' }}
           placeholder="Your message"></textarea>
         </div>
        </div>
        <div className="text-center">
         <button className="btn btn-primary w-full bg-blue-500 shadow-lg shadow-blue-500/50 border-white hover:bg-gray-100 shadow-lg shadow-gray-500/50 ">Send</button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </section>
 );
}

export default Contact;
