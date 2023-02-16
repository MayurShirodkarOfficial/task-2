import { Popover } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
export default function Header() {
    const navigate = useNavigate();
    const onSignInClickHandler =()=>{
        navigate("/signin");
        
    }
    const onSignUpClickHandler =()=>{
        navigate("/signup");
        
    }
    return (
        <header className='z-30 relative bg-transparent'>
        <Popover className="relative">
            <div className=" mx-auto max-w-7xl px-6">

                <div className="flex items-center justify-between py-6 md:justify-start md:space-x-10">
                    <div className="cursor-pointer flex justify-start lg:w-0 lg:flex-1">
                        <a href="#">
                            <span className="sr-only">Lyktek</span>
                            <img
                                className="h-12 w-auto sm:h-12 bg-blue-700 p-2 rounded"
                                src="https://lyktek.io/images/Lyktek_Logo_White_Blue.png"
                                alt=""
                            />
                        </a>
                    </div>

                    <a href ="/"  className="z-2 cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
                        Home
                    </a>
                    <a href="#" className="z-2 cursor-pointer text-base font-medium text-gray-500 hover:text-gray-900">
                        About
                    </a>


                    <div>
                        <a  
                        href="#"
                        onClick={onSignInClickHandler}
                        className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign in
                        </a>
                        <a
                            href="#"
                            onClick={onSignUpClickHandler}
                            className="ml-8 inline-flex items-center justify-center whitespace-nowrap rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                            Sign up
                        </a>
                    </div>
                </div>
            </div>
        </Popover>
        </header>
    )
}
