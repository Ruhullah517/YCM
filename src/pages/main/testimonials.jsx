import React, { useState } from 'react';

const testimonials = [
    {
        img: "/images/profile.jpg",
        name: "Wendy",
        occupation: "Mathematics Teacher",
        location: "From Kenya",
        feedback: "My journey with YCM Solutions brought me to a vibrant school district in North Carolina. The support I received throughout the H1B visa process and my transition to living in the US was exceptional. I now teach middle school math and absolutely love my students and the community."
    },
    {
        img: "/images/profile2.jpg",
        name: "Andey",
        occupation: "Science Teacher",
        location: "From USA",
        feedback: "My journey with YCM Solutions brought me to a vibrant school district in North Carolina. The support I received throughout the H1B visa process and my transition to living in the US was exceptional. I now teach middle school math and absolutely love my students and the community."
    },
    {
        img: "/images/profile.jpg",
        name: "Alex",
        occupation: "English Teacher",
        location: "From England",
        feedback: "My journey with YCM Solutions brought me to a vibrant school district in North Carolina. The support I received throughout the H1B visa process and my transition to living in the US was exceptional. I now teach middle school math and absolutely love my students and the community."
    },
    // Add more testimonials here
];

export default function Testinmonials() {
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    const prevTestimonial = () => {
        setCurrentTestimonialIndex((currentTestimonialIndex - 1 + testimonials.length) % testimonials.length);
    };

    const nextTestimonial = () => {
        setCurrentTestimonialIndex((currentTestimonialIndex + 1) % testimonials.length);
    };

    const testimonial = testimonials[currentTestimonialIndex];

    return (
        <div className="bg-background text-foreground p-8 bg-slate-50">
            <h2 className="text-center text-2xl font-semibold mb-4 text-red-800">TESTIMONIALS</h2>
            <div className="bg-card p-6 rounded-lg flex md:items-center transition-all duration-500 ease-in-out">
                <div className="flex-shrink-0 mr-6">
                    <img className="w-28 h-28 md:w-96 md:h-96 rounded-tl-full rounded-bl-full rounded-tr-md rounded-br-full object-cover" src={testimonial.img} alt="Testimonial person" />
                </div>
                <div>
                    <div className="flex flex-col items-start mb-2 pl-6">
                        <span className="text-accent md:text-7xl mr-2 text-yellow-500">&#10078;</span>
                        <h3 className="text-primary text-xl md:text-7xl font-bold text-red-900">{testimonial.name}</h3>
                        <p className="text-muted-foreground text-normal md:text-2xl font-bold mb-1 text-red-900">{testimonial.occupation}</p>
                        <p className="text-muted-foreground text-sm md:text-2xl font-bold mb-4 text-gray-600">{testimonial.location}</p>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-2xl text-gray-600">{testimonial.feedback}</p>
                </div>
            </div>
            <div className="flex justify-end md:mt-4">
                <button
                    onClick={prevTestimonial}
                    className="bg-red-800 h-10 md:h-16 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 md:px-8 rounded-tl-full rounded-bl-full rounded-br-full mx-1"
                >
                    <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 md:size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>

                </button>
                <button
                    onClick={nextTestimonial}
                    className="rounded-tr-full  h-10 md:h-16 rounded-bl-full rounded-br-full bg-red-800 bg-secondary text-secondary-foreground hover:bg-secondary/80 px-4 md:px-8 mx-1"
                >
                    <svg style={{ color: "white" }} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 md:size-16">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>
        </div>
    );
}
