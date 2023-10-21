import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Quiz from './Quiz';

export default function Profile() {
  const auth=localStorage.getItem('user')
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear();
    navigate('/');
  }
  return (
    <div>
        <h1>Hello {JSON.parse(auth).name}</h1>
        Profile <br/>
        <Quiz/>
        <Link onClick={logout} to="/">Log out</Link>
    </div>
  )
}
