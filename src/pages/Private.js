import React from 'react'
import RequireAuth from '../components/layout/RequireAuth'

const Private = () => {
    return (
        <div>
            <div className='text-4xl font-bold mb-10'>
                Private - Benvenuto
            </div>
            <div className='text-2xl flex flex-col gap-2'>
                <div className='flex'>
                    <b>Email:</b> <div className='italic pl-3'>{localStorage.getItem("email")}</div>
                </div>
                <div className='flex'>
                    <b>Password:</b> <div className='italic pl-3'>{localStorage.getItem("password")}</div>
                </div>
            </div>
        </div>
    )
}

export default Private