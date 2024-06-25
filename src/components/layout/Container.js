import React from 'react'
import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom'
import { UiButton } from '../ui/UiButton'

const Container = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const logout = () => {
    if(confirm("Sei sicuro di voler uscire?")){
      localStorage.removeItem("user");
      localStorage.removeItem("email");
      localStorage.removeItem("password");
      navigate("/login");
    }
  }

  const redirectToHome = () => {
    navigate("/");
  }
  return (
    <div className="md:pl-64 flex flex-col flex-1">
      <main className="flex-1">
        <div className="py-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
            <div className='border-b-2 border-gray-700'>
              {JSON.stringify(location.pathname)}
            </div>
            <Outlet /> {/*  per renderizzare tutto quello che è sotto come "figlio"  */}
            {/* {children} */}
            <div className='flex justify-end gap-5'>
              {location.pathname != "/login" && <div className="flex justify-end mt-8">
                <UiButton
                  title="Logout"
                  onClick={logout}
                />
              </div>}
              {location.pathname != "/" && <div className="flex justify-end mt-8">
                <UiButton
                  title="Go To Home"
                  onClick={redirectToHome}
                />
              </div>}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Container