"use client";
import React from 'react'
import Footer from "./Footer";
import Header from "./Header";
import { AuthProvider } from "./../../context/AuthContext";
import { ToastProvider } from "./ToasterProvider";
import { store } from  './../../store/store'
import { Provider } from 'react-redux'

const ClientApp = ({children}) => {
  return (
    <>
     <Provider store={store}>
        <AuthProvider>
          <ToastProvider>
          <Header />
          <main className="flex-1 pt-25">
            {children}
          </main>
          <Footer />
          </ToastProvider>
        </AuthProvider>
      </Provider>
    
    </>
  )
}

export default ClientApp