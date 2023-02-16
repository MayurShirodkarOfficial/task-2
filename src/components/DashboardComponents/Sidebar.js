import React from 'react'
const Sidebar = () => {
    return (
        <div className="md:w-2/12 h-screen shadow-2xl">
           
            <div className="p-4 space-y-14">
                <div className="space-y-4" >
                    <h1 className="font-bold text-gray-800">Dashboard</h1>
                    
                    <div className="" >
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            
                            <p className="text-gray-600  " >Logs</p>
                        </div>
                    </div>
                    <div className="" >
                        <div className="flex p-3 text-gray-700  space-x-4 0 hover:bg-gray-50 hover:text-blue-600  cursor-pointer  ">
                            <p className="text-gray-600  " >Admin</p>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Sidebar;