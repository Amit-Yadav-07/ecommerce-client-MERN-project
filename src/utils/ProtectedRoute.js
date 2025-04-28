import { redirect } from 'react-router-dom'
import customFetch from './customFetch';


const ProtectedRoute = async () => {
  const token = localStorage.getItem('token')

  if (!token) {
    console.log('no token found');
    redirect('/login')
  }

  try {
    console.log('Fetching current user');
    const response = await customFetch.get('auth/current-user');
    console.log('user Fetched successfully', response.data);
    return response.data

  } catch (error) {
    console.log('authentication failed');
    return redirect('/login')
  }



}

export default ProtectedRoute;