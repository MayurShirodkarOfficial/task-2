import React,{useEffect} from 'react';
import DashboardComponent from '../components/DashboardComponent';
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  
  useEffect(() => {
    if (!token) {
      navigate('/signin');
    }
  }, [token, navigate]);

  return (
    <div>
      {<DashboardComponent/>}
    </div>
  );
}

export default Dashboard;