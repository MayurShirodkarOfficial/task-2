

import Header from '../components/Header'
import SigninForm from '../components/SigninForm'

export default function Signin() {
  return (
    <>
      <Header/>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className=" h- w-auto bg-blue-700 p-2 rounded"
              src="https://lyktek.io/images/Lyktek_Logo_White_Blue.png"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            
        
          </div>
         <SigninForm/>
        </div>
      </div>
    </>
  )
}
