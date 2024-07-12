import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-slate-50 text-zinc-800 py-10 px-5">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap">
                <div className="mb-6 md:mb-0 md:w-3/5">
                    <img
                        src="/images/logo.png"
                        alt="YCM Solutions Inc. logo"
                        className="mb-4 w-3/12"
                    />
                    <p className="text-sm md:text-lg font-semibold text-gray-500">
                        YCM Solutions is a specialized recruitment agency with a passion for education and a deep understanding of the US school system. Our team is composed of former educators and industry professionals dedicated to bridging the gap between international teachers and American school districts.
                    </p>
                </div>
                <div className="mb-6 md:mb-0 md:w-1/3 pl-9">
                    <h3 className="font-semibold mb-2 text-lg md:text-3xl text-gray-700">Quick Links</h3>
                    <ul className="text-sm md:text-lg space-y-1 text-gray-700">
                        {['Homepage', 'About Us', 'Our Services', 'Projects Work', 'Contact Us'].map((link, index) => (
                            <li key={index} className="flex items-center gap-x-3">
                                <svg style={{ color: "GrayText" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>


                                <a href="#" className="hover:underline">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="mb-6 md:mb-0 md:w-1/3 pl-9">
                    <h3 className="font-semibold mb-2 text-lg md:text-3xl text-gray-700">Site Policy</h3>
                    <ul className="text-sm md:text-lg space-y-1 text-gray-700">
                        {['Desclaimer', 'Privacy Policy', 'Terms and Conditions', 'GDPR', 'Cookies Usage'].map((link, index) => (
                            <li key={index} className="flex items-center gap-x-3">
                                <svg style={{ color: "GrayText" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-3">
                                    <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                                </svg>


                                <a href="#" className="hover:underline">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="md:w-1/3">
                    <h3 className="font-semibold mb-2 text-lg  md:text-3xl text-gray-700">Let's Get In Touch</h3>
                    <ul className="text-sm md:text-xl text-gray-700 space-y-1">
                        <li className="flex items-center md:text-lg gap-x-3">
                            <svg style={{ color: "rgb(127 20 22)" }} className='mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                            </svg>

                            yasmeen@ycmsol.com
                        </li>
                        <li className="flex items-center md:text-lg gap-x-3">
                            <svg style={{ color: "rgb(127 20 22)" }} className='mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                            </svg>


                            757.257.8844
                        </li>
                        <li className="flex items-center md:text-lg gap-x-3">
                            <svg style={{ color: "rgb(127 20 22)" }} className='mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-5">
                                <path fill-rule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clip-rule="evenodd" />
                            </svg>

                            Mechanicsville, VA
                        </li>
                    </ul>
                    <div className="flex space-x-4 mt-4">
                        {[
                            {
                                href: '#',
                                svg: (<svg class="h-6 w-6 text-rose-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />  <rect x="2" y="9" width="4" height="12" />  <circle cx="4" cy="4" r="2" /></svg>),
                                alt: 'LinkedIn icon',
                            },
                            {
                                href: '#',
                                svg: (<svg class="h-6 w-6 text-rose-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>),
                                alt: 'Instagram icon',
                            },
                            {
                                href: '#',
                                svg: (<svg class="h-6 w-6 text-rose-800" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>),
                                alt: 'Facebook icon',
                            },
                        ].map((social, index) => (
                            <a key={index} href={social.href}>
                                {social.svg}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="text-center text-sm mt-10">
                ALL RIGHTS RESERVED - ORIENTSOFT SOLUTIONS
            </div>
        </footer>
    );
}
