

const Services = () => {
    return (<>
        <div className="text-center  p-3">
            <h1 className="text-3xl font-semibold text-red-900">Our Services</h1>
            <h1 className=" text-5xl font-semibold text-red-900 ">Find Your Perfect Teaching Method</h1>
            <div className="pt-20 flex justify-around flex-row gap-x-8 flex-wrap">

                <div className="w-96 relative">
                    <img className="rounded-3xl" src="/images/women.jpg" alt="" />
                    <div className=" absolute left-40 top-60 cursor-pointer">
                        <svg style={{color:"rgb(127 29 29)"}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-16">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.847-9.766A.75.75 0 0 0 6 5.866v4.268a.75.75 0 0 0 1.153.633l3.353-2.134a.75.75 0 0 0 0-1.266L7.153 5.234Z" clip-rule="evenodd" />
                        </svg>
                    </div>

                </div>
                <div className=" grid gap-8 grid-cols-2 grid-rows-2">
                    <div className=" rounded-3xl bg-slate-100 p-7 text-start w-96">
                        <div className="flex justify-start mb-4">
                            <svg style={{color:"rgb(127 29 29)"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
                            </svg>

                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">
                                Customized Recruitment Solutions
                            </h2>
                            <p className="text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget
                            </p>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="bg-white-900 font-medium px-2 py-4 text-font-thin text-rose-900 flex flex-row"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className=" rounded-3xl bg-red-900 p-4 text-start w-96">
                        <div className="flex justif-start mb-4">
                            <svg style={{color:"#e7ae06"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" />
                            </svg>

                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold text-white">
                                Visa and Relocation Assistant
                            </h2>
                            <p className="text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget
                            </p>
                        </div>
                        <div className="">
                            <a style={{color:"#e7ae06"}}
                                href="#"
                                className="font-medium px-2 py-4 text-font-thin text-white flex flex-row"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-slate-100 p-4 text-start w-96">
                        <div className="flex justify-start mb-4">
                            <svg style={{color:"rgb(127 29 29)"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                            </svg>

                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold">
                                Ongoing Professional Development
                            </h2>
                            <p className="text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget
                            </p>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="bg-white-900 font-medium px-2 py-4 text-font-thin text-rose-900 flex flex-row"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </a>
                        </div>
                    </div>
                    <div className="rounded-3xl bg-slate-100 p-4 text-start w-96">
                        <div className="flex justify-start mb-4">
                            <svg style={{color:"rgb(127 29 29)"}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                            </svg>

                        </div>
                        <div className="mb-4">
                            <h2 className="text-xl font-semibold ">
                                Success Stories
                            </h2>
                            <p className="text-gray-400">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget
                            </p>
                        </div>
                        <div className="">
                            <a
                                href="#"
                                className="bg-white-900 font-medium px-2 py-4 text-font-thin text-rose-900 flex flex-row"
                            >
                                Learn More
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                </svg>

                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>)
};


export default Services;