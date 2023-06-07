import Link from "next/link";
import { Wrapper } from "../Shared/Wrapper"
import {
    Poppins as Poppins,

} from '@next/font/google';
import { ShoppingCartIcon } from "lucide-react";

const poppin = Poppins({
    subsets: ['latin'],
    // this will be the css variable
    variable: '--font-poppins',
    weight: "100"
});

const Navbar = () => {
    return (
        <nav>
            <Wrapper>
                <div className='py-5 mx-5 mt-2 md:px-4 lg:px-12  flex justify-between items-center'>
                    <Link href={"/"}>
                    <h3 className="font-sans font-bold uppercase underline underline-offset-4"> Hekto </h3>
                    </Link>
                    <ul className="flex lg:space-x-16 md:space-x-7 space-x-3 mr-10 md:mr-0 font-medium">
                        <li>
                            <Link href={"/"}>
                                Sofa
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                Chair
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                Accessories
                            </Link>
                        </li>
                        <li>
                            <Link href={""}>
                                All
                            </Link>
                        </li>
                    </ul>

                    <div className="md:flex items-center border bg-white rounded-md hidden md:visible">

                        <input type="search" className=" px-2  text-gray-800 rounded-sm "
                            placeholder="Search" />
                        <div>
                            <button type="submit" className="flex items-center bg-[#FB2E86] justify-center w-8 h-8 text-white rounded-r-lg">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="bg-gray-200 h-10 w-10 rounded-full relative justify-center items-center flex hover:scale-110 cursor-pointer duration-300 ease-in">
                        <ShoppingCartIcon/>
                        <span className="bg-red-500 p-2.5 rounded-full h-5 w-5 bottom-7 left-6 text-white absolute justify-center items-center flex">0</span>
                    </div>
                </div>

            </Wrapper>
        </nav>
    )
}

export default Navbar