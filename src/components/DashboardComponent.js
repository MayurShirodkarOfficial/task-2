import React, { useState,useEffect } from 'react';
import Sidebar from './DashboardComponents/Sidebar';
import WelcomeBanner from './DashboardComponents/WelcomeBanner';
import Header from './Header';
import axios from 'axios';
import FileUploadForm from '../components/FileUploadForm';
import TestDeviceForm from './TestDeviceForm';


const DashboardComponent = () => {
let name ="";

  
// useEffect(async()=>{
// const id = await localStorage.getItem('Id');
// const token = await localStorage.getItem(token);
// const config = {
//   headers: {
//     'Origin': "http://localhost:3000",
//     'Content-Type': 'application/json',
//     'Authorization':`Bearer ${token}`
//   }
// };

//   await axios.get(`http://restapi.adequateshop.com/api/users/${id}`,config).then((res)=>{
//   name = res.data.data.Id;
//   });

// },[]);
  


  return (
    
    <div className="flex h-screen overflow-hidden">
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            <WelcomeBanner text ={name}/>
            <FileUploadForm />
            <TestDeviceForm/>

          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardComponent;