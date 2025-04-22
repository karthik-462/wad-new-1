import { Navigate } from 'react-router-dom';

function Root() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }
  
  return <Navigate to="/register" />;
}

export default Root;
