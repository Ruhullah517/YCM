

import React, { useState } from 'react';

const faqs = [
    {
        question: "Can I Get Warranty?",
        answer: "Yes, you can get a warranty on our products. The warranty period depends on the product category and the terms specified at the time of purchase."
    },
    {
        question: "How Long Talent Search?",
        answer: "The talent search process duration varies depending on the specific requirements and the availability of suitable candidates. Generally, it can take a few weeks to a few months."
    },
    {
        question: "How To Get Meetup?",
        answer: "To arrange a meetup, please contact our support team with your preferred date and time. We will coordinate with our team to set up a convenient meeting schedule."
    },
    {
        question: "How Long Talent Search?",
        answer: "The talent search process duration varies depending on the specific requirements and the availability of suitable candidates. Generally, it can take a few weeks to a few months."
    },
    {
        question: "How Long Talent Search?",
        answer: "The talent search process duration varies depending on the specific requirements and the availability of suitable candidates. Generally, it can take a few weeks to a few months."
    },
    {
        question: "How Long Talent Search?",
        answer: "The talent search process duration varies depending on the specific requirements and the availability of suitable candidates. Generally, it can take a few weeks to a few months."
    },
    // Add more FAQs here
];

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="bg-background text-foreground py-24">
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-secondary text-2xl tracking-wide text-red-800 font-semibold pb-5">FEATURED QUESTION ANSWER</h2>
                <h1 className="text-primary text-5xl text-red-800 font-bold mt-2 pb-5">Frequently Asked Question You Should Know</h1>
            </div>
            <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                    <div key={index} className="bg-card p-4 rounded-lg shadow-md bg-slate-100">
                        <div className="flex justify-between items-center">
                            <a href="#" className="text-primary-foreground font-semibold">
                                {faq.question}
                            </a>
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="text-muted-foreground"
                            >
                                {openIndex === index ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                                </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                                }
                            </button>
                        </div>
                        {openIndex === index && (
                            <div className="mt-4 text-muted-foreground">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}
