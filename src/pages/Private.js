import React from 'react'
import RequireAuth from '../components/layout/RequireAuth'

const Private = () => {
    return (
        <RequireAuth>
            <div className='text-4xl'>
                Private - Benvenuto
            </div>
        </RequireAuth>
    )
}

export default Private