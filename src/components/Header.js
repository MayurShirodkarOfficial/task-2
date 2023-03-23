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
                                className="h-12 w-auto sm:h-12 rounded"
                                src="https://www.infiniteautomation.com.au/wp-content/uploads/2022/03/logo.png"
                                alt=""
                            />
                        </a>
                    </div>

                    <div>
                        {<a  
                        href="#"
                        onClick={onSignInClickHandler}
                        className=" whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                            Sign Out
                        </a>}
                    </div>
                </div>
            </div>
        </Popover>
        </header>
    )
}
