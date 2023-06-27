import React from "react";
import { Wrapper } from "../Shared/Wrapper";
import Link from "next/link";

const Footer = () => {
    return (
        <Wrapper>
            <footer className="bg-[#F2F0FF] dark:bg-gray-900 mt-32">
                <div className="grid grid-cols-2 gap-5 px-4 py-6 md:space-x-16  lg:py-8 md:grid-cols-4">
                    <div>
                        <div className="max-w-fit">
                            <Link href={"/"} >
                                <h3 className="font-sans text-[#30207a] font-bold uppercase mb-6"> Hekto </h3>
                            </Link>
                        </div>
                        <div className="flex border  mb-5 w-fit">
                            <input type="text" placeholder="Enter your email" className="px-1 h-6 w-20 md:h-7 lg:h-8 lg:w-40 md:w-28" />
                            <button className='bg-[#FB2E86]  text-white font-sans font-semibold text-sm  px-2 lg:px-5'>{"Submit"}</button>
                        </div>
                        <p className="text-[#8A8FB9]"> Murree Road London, The Great Britain NW1 8JR, UK</p>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-[#30207a] uppercase dark:text-white">Company</h2>
                        <ul className="text-[#8A8FB9] dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className=" hover:underline">About</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Careers</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Brand Center</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-[#30207a] uppercase dark:text-white">Help center</h2>
                        <ul className="text-[#8A8FB9] dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Discord Server</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Twitter</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Facebook</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-[#30207a] uppercase dark:text-white">Legal</h2>
                        <ul className="text-[#8A8FB9] dark:text-gray-400 font-medium">
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Privacy Policy</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Licensing</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className=" shadow-gray-300 bg-[#E7E4F8]  text-[#30207a] p-2  text-center font-bold">
                    Designed with ❤️ By
                    <Link href={"https://github.com/mahsanr44"} className="text-[#FB2E86]"> Ahsan</Link>
                </div>
            </footer>
        </Wrapper>
    );
};

export default Footer;