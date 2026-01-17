import React from 'react';
import { FaArrowLeftLong, FaArrowRightLong, FaLocationDot } from 'react-icons/fa6';
import { FiPhoneCall } from 'react-icons/fi';
import { MdEmail } from 'react-icons/md';
import { Link } from 'react-router';

const ContactSection = () => {


  const contactInfos = [
    {
      id: 1,
      icon: <MdEmail />,
      title: "email",
      info: "webspecialistmonika@gmail.com",
      href: "mailto:webspecialistmonika@gmail.com"
    },
    {
      id: 2,
      icon: <FaLocationDot />,
      title: "location",
      info: "halishahar , chattogram",
      href: ""
    },
    {
      id: 3,
      icon: <FiPhoneCall />,
      title: "phone",
      info: "+880 1864162004",
      href: "tel:+8801864162004"
    }
  ]
  return (
    <section id="contact" className="lg:py-10 py-5  ">
      <div className="container  ">
        <div
          className=" mx-1.5 lg:mx-0 p-4 lg:px-15 lg:py-20 bg-[#141414] rounded-lg
        grid grid-cols-1 lg:grid-cols-2 justify-center items-center  ">
          {/* left column start---- */}
          <div className=" ">
            {/* heading */}
            <h3 className=" heading-text-48px text-center lg:text-left 
             w-full lg:w-[70%] "
            >
              Elevate your brand with me
            </h3>
            {/* icons */}
            <div className="mt-7.5 ">
              {contactInfos.map((info, index) => {
                return (
                  <div key={index}
                    className="flex gap-2 lg:gap-3.75 items-center mb-5.5">
                    <span className="contact-btn text-sm lg:text-base text-white "> {info.icon} </span>
                    <div className="">
                      <p className="text-xs lg:text-sm text-[#9f9f9f] font-normal font-rubik leading-[120%] lg:leading-[160%] capitalize  "> {info.title}  </p>
                      <a
                        href={info.href}
                        className=" slide-underline
                        text-sm lg:text-base text-white font-normal font-rubik leading-7.5 capitalize "
                      >
                        {info.info}
                      </a>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          {/* left-column end--- */}
          {/* right column */}
          <div className=" space-y-2 lg:space-y-4">
            <h3 className="heading-text-48px  uppercase lg:capitalize text-center lg:text-left    "> get in touch</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4 ">
              {/* name+phone */}
              <input
                type="text"
                name=""
                id=""
                placeholder='enter your name'
                required
                // autoFocus ar jonno contact section aga load hocca kano????
                className='input-field'
              />
              <input
                type="text"
                name=""
                id=""
                required
                placeholder='phone number'
                className='input-field'
              />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-4  ">
              {/*  email + subject...*/}
              <input
                type="email"
                name=""
                id=""
                required
                placeholder="enter email address"
                className='input-field'
              />
              <input
                type="text"
                name=""
                id=""
                required
                placeholder='subject'
                className='input-field'
              />
            </div>
            <textarea
              name=""
              id=""
              required
              placeholder='message'
              className="input-field h-37.5 w-full "
            >

            </textarea>
            {/* btn.... */}
            <button
              type="submit"
              className=' arrow-btn inline-block py-3 bg-[#ff014f] w-full rounded-full text-base text-white font-rubik font-medium capitalize mx-auto'
            >

              <span className={`arrow left `}><FaArrowLeftLong /></span>
              <span className={`text `} > appointment Now</span>
              <span className={`arrow right `} ><FaArrowRightLong /></span>
            </button>
          </div>
          {/* ---right column end--- */}


        </div>
      </div>
    </section>
  );
};

export default ContactSection;
// 1.container a margin kaj korcha na kano?