import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';
import ReviewLayout from '../utils/ReviewLayout';

// import swiper,swiperslide
import { Swiper, SwiperSlide } from 'swiper/react';
// import swiper/css
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"
// import swiper/modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const TestimonialSection = () => {


    const testimonials = [
           {
            id: 1,
            review: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            img: '/images/reviewer-img/abdur-rahman.jpeg',
            name: 'abdur rahman',
            designation: "frontend development",
            rating: "4.5"

            // contribution 
        },
        {
            id: 2,
            review: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            img: '/images/reviewer-img/abdur-rahman.jpeg',
            name: 'abdur rahman',
            designation: "frontend development",
            rating: "4.5"

            // contribution 
        },
        {
            id: 3,
            review: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            img: '/images/robert-fox.png',
            name: 'abdur rahman',
            designation: "frontend development",
            rating: "4.2"

            // contribution 
        }, {
            id: 4,
            review: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            img: '/images/robert-fox.png',
            name: 'abdur rahman',
            designation: "frontend development",
            rating: "4.2"

            // contribution 
        }, {
            id: 5,
            review: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            img: '/images/robert-fox.png',
            name: 'abdur rahman',
            designation: "frontend development",
            rating: "4.2"

            // contribution 
        },
        {
            id: 6,
            review: "Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna dictum, bibendum cursus velit sodales. Donec sed neque eget",
            img: '/images/robert-fox.png',
            name: 'abdur rahman',
            designation: "frontend development",
            rating: "4.2"

            // contribution 
        },
    ]

    return (
        <section id="testimonial" className="py-8 lg:py-17.5 bg-black ">
            <div className="container">
                {/* header start... */}
                <div className="flex justify-between items-center mb-4 lg:mb-10.75">
                    {/* text... */}
                    <div className="w-full lg:w-auto">
                        <h2 className="text-base text-[#ff014f] font-medium font-poppins leading-[120%] tracking-wider uppercase text-center lg:text-left   "> testimonials </h2>
                        <p className="text-2xl lg:text-[40px] text-[#999] font-semibold font-poppins leading-[120%] capitalize text-center lg:text-left "> What my mentors Say</p>
                    </div>
                    {/* swiper navigation btn.. */}
                    <div className="hidden lg:flex gap-3">
                        <span className=' prev-btn swiper-left'><FaArrowLeft /></span>
                        <span className=' next-btn swiper-right '><FaArrowRight /></span>
                    </div>
                </div>
                {/* header end... */}
                {/* testimonial start... */}
                <Swiper
                    slidesPerView={3}
                    spaceBetween={24}
                    modules={[Pagination, Autoplay,Navigation]}
                    pagination={{ clickable: true }}
                    loop={true}
                    speed={1000}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false
                    }}
                    navigation={{
                        prevEl:".prev-btn",
                        nextEl:".next-btn"

                    }}
                    breakpoints={{
                        0:{
                            slidesPerView:1,
                        },
                        768:{
                            slidesPerView:1,
                        },
                        1024:{
                            slidesPerView:3
                        }
                    }}

                >
                    {testimonials.map((testimonial) => {
                        return (
                            <SwiperSlide>
                                <ReviewLayout key={testimonial.id}
                                    testimonial={testimonial} />
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
                {/* testimonial end... */}
            </div>
        </section>
    );
};

export default TestimonialSection;

// 1.....Pixel width দিয়ে breakpoint ঠিক করুন - যেমন 0, 640, 768, 1024
// 2....?প্রতিটি breakpoint একটা object - যার মধ্যে slidesPerView, spaceBetween ইত্যাদি থাকবে
// 3..?Mobile-first approach - ছোট screen থেকে শুরু করুন (0px থেকে)