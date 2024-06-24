import React from 'react'
import { Outlet } from 'react-router'

const Container = ({children}) => {
  return (
    <div className="md:pl-64 flex flex-col flex-1">
        <main className="flex-1">
            <div className="py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                  <Outlet /> {/*  per renderizzare tutto quello che è sotto come "figlio"  */}
                  {/* {children} */}
                </div>
            </div>
            <div className="flex justify-end">
              Torna alla home
            </div>
        </main>
    </div>
  )
}

export default Container