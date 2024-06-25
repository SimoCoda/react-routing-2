import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const RequireAuth = ({children}) => {

    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    
    const redirectToLogin = () => {
        navigate("/login");
    }
    
    useEffect(() => {
        //call a servizio di verifica del token
        const user = localStorage.getItem("user")
        if(user){
            setAuth(true);
        }else{
            redirectToLogin();
        }
    },[])

  return (
    <div>{auth && children}</div>
  )
}

export default RequireAuth