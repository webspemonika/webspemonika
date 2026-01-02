import React from 'react';
import { GoStarFill } from 'react-icons/go';
import Rating from 'react-rating';

const ReviewLayout = ({testimonial} ) => {
    return (
         <div key={testimonial.id}
                                    className="p-4 lg:px-6 lg:py-8 bg-[#141414] rounded-lg
                                    hover:outline hover:outline-[#ff014f] cursor-pointer
                                    "
                                >
                                    <img
                                        src="/icons/features/double-quote.png"
                                        alt="quote"
                                        className='w-8 h-6.5 inline-block '

                                    />
                                    <p className="my-4 text-sm text-white font-normal font-poppins leading-[150%] normal-case "> {testimonial.review} </p>
                                    {/* bottom part */}
                                    <div className="flex justify-between items-center">
                                        <div className="flex gap-3 items-center">
                                            <img
                                                src={testimonial.img}
                                                alt={testimonial.name}
                                                className='size-10 lg:size-14 object-cover rounded-full'
                                            />
                                            <div className="">
                                                <h5 className="text-sm text-[#ff104f] font-medium font-dancing-script leading-[150%] capitalize"> {testimonial.name} </h5>
                                                <p className=" text-xs text-[#999] font-normal font-rubik leading-[150%] capitalize "> {testimonial.designation} </p>
                                            </div>


                                        </div>
                                        <Rating
                                            readonly
                                            initialRating={testimonial.rating}
                                            emptySymbol={<GoStarFill className='text-base text-[#999] ' />}
                                            fullSymbol={<GoStarFill className='text-base text-[#ff014f] ' />}
                                        />
                                    </div>
                                </div>
    );
};

export default ReviewLayout;