import React from 'react'
import Header from '../components/Header'
import SigninForm from '../components/SigninForm'

const home = () => {
    return (
        <div>
            <Header />
            <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-md space-y-8">
                    <div>
                        <img
                            className=" w-auto ml-12 rounded"
                            src="https://www.infiniteautomation.com.au/wp-content/uploads/2022/03/logo.png"
                            alt="Your Company"
                        />
                        <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                            Sign in to your account
                        </h2>


                    </div>
                    <SigninForm />
                </div>
            </div>


        </div>
    )
}

export default home