


const Recruitment = () => {
    return (<>
        <div className="flex justify-between pt-32 p-6 gap-10 flex-col md:flex-row ">
            <div className=" flex flex-col gap-y-14">
                <h1 className="text-2xl tracking-wide font-semibold text-red-800">
                    AND THE VALUE KEEPS ADDING UP!
                </h1>
                <h1 className="text-5xl tracking-wide font-semibold text-red-800">
                    Zero Fees And Payments
                    <br />Until You Hire A Teacher
                </h1>
                <div className="w-12/12">
                    <img className="rounded-3xl" src="/images/teacher (2).jpg" alt="" />
                </div>
            </div>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-x-10">
                <div className="w-80 relative">
                    <img className="rounded-3xl" src="/images/laptop.jpg" alt="" />
                    <div className=" absolute left-28 top-48 cursor-pointer z-3">
                        <svg style={{ color: "rgb(127 29 29)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-20">
                            <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm-.847-9.766A.75.75 0 0 0 6 5.866v4.268a.75.75 0 0 0 1.153.633l3.353-2.134a.75.75 0 0 0 0-1.266L7.153 5.234Z" clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>
                <div className="w-80 pt-10">
                    <div className="w-80 pb-10">
                        <img className="rounded-3xl" src="/images/sales.jpg" alt="" />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold text-gray-600">Experts In Recruiting For Demanding Teaching Positions</h3>
                        <p className="text-2xl text-gray-400">We excel in finding the perfect fit for your most demanding vacancies</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
};


export default Recruitment;