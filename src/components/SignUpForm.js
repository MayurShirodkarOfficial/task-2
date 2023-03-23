import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from 'axios';
export default function SignUpForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const onSignInClickHandler = () => {

        navigate("/signin");

    }

    const handleChange = (e) => {

        if (e.target.name == 'email') {
            setEmail(e.target.value)
        }
        else if (e.target.name == 'password') {
            setPassword(e.target.value)
        }
        else if (e.target.name == 'name') {
            setName(e.target.value)
        }

    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = { name, email, password };

        var res = data.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
        if (res === null) {
            alert("Enter correct mail");
            return;
        }
        console.log(data);
        const config = {
            headers: {
              'Origin': "http://localhost:3000",
              'Content-Type': 'application/json'
            }
          };



        await Axios.post("https://cors-anywhere.herokuapp.com/http://restapi.adequateshop.com/api/authaccount/registration",
            {
                name: name,
                email: email,
                password: password
            },config).then((response) => {
                console.log(response);
                if (response.status == 200) {
                    alert("Success!! going to login page")
                    setTimeout(() => {
                        navigate("/signin")
                    }, 4000);
                }
            })

        return;
    }




    return (
        <div>
            <div className="flex flex-col items-center min-h-screen  sm:justify-center sm:pt-0 bg-gray-50">
                <div className="w-full max-w-md space-y-8">
                    <a href="/">
                        <img
                            className=" h- w-auto bg-blue-700 p-2 rounded"
                            src="https://lyktek.io/images/Lyktek_Logo_White_Blue.png"
                            alt="Your Company"
                        />
                    </a>
                </div>
                <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-lg sm:rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Name
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={handleChange}
                                    type="text"
                                    name="name"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Email
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={handleChange}
                                    type="email"
                                    name="email"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>
                        <div className="mt-4">
                            <label
                                htmlFor="password_confirmation"
                                className="block text-sm font-medium text-gray-700 undefined"
                            >
                                Confirm Password
                            </label>
                            <div className="flex flex-col items-start">
                                <input
                                    type="password"
                                    name="password_confirmation"
                                    className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                />
                            </div>
                        </div>

                        <div className="flex items-center mt-4">
                            <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                                Sign Up
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 text-grey-600">
                        Already have an account?{" "}
                        <span>
                            <a className="text-purple-600 hover:underline" onClick={onSignInClickHandler}>
                                Sign in
                            </a>
                        </span>
                    </div>


                </div>
            </div>
        </div>
    );
}