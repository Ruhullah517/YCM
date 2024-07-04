import React from 'react';

export default function Resources() {
    return (
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mb-8">
            <div className="text-start">
                <h2 className="text-2xl text-red-800 font-semibold text-muted-foreground tracking-wide uppercase">Our Resources</h2>
                <p className="mt-2 text-5xl leading-8 font-bold tracking-tight leading-relaxed text-red-800">
                    Connect, Explore, And <br /> Discover
                </p>
            </div>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div className="bg-red-800 rounded-3xl shadow-xl overflow-hidden">
                    <img
                        className="h-72 w-full object-cover rounded-3xl"
                        src="/images/teacher.jpg"
                        alt="Teaching In The US 101"
                    />
                    <div className="p-6 bg-red-800 text-primary-foreground pt-10">
                        <h3 className="text-2xl tracking-wide font-semibold text-white">Teaching In The US 101</h3>
                        <p className="mt-2 tracking-wide text-base text-slate-200 pt-10">
                            A step-by-step guide to understanding the US education system, H1B visa options, and the application process.
                        </p>
                        <a href="#" className="mt-4 pt-10 inline-block text-yellow-500 hover:text-secondary-foreground">
                            Read More &raquo;
                        </a>
                    </div>
                </div>
                <div className="bg-red-800 rounded-3xl shadow-xl overflow-hidden">
                    <img
                        className="h-72 w-full object-cover rounded-3xl"
                        src="/images/group.jpg"
                        alt="Teaching In The US 101"
                    />
                    <div className="p-6 bg-red-800 text-primary-foreground pt-10">
                        <h3 className="text-2xl tracking-wide font-semibold text-white">Teaching In The US 101</h3>
                        <p className="mt-2 tracking-wide text-base text-slate-200 pt-10">
                            A step-by-step guide to understanding the US education system, H1B visa options, and the application process.
                        </p>
                        <a href="#" className="mt-4 pt-10 inline-block text-yellow-500 hover:text-secondary-foreground">
                            Read More &raquo;
                        </a>
                    </div>
                </div>

                <div className="bg-muted rounded-3xl shadow-xl overflow-hidden flex items-center justify-center">
                    <a href="#" className="text-3xl font-semibold text-red-800 text-primary hover:text-primary-foreground">
                        View All
                    </a>
                </div>
            </div>
        </div>
    );
}
