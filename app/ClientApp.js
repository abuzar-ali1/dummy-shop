"use client";
import React from 'react'
import { AuthProvider } from "./context/AuthContext";
import { ToastProvider } from "./ui/Components/ToasterProvider";
import Header from "./ui/Components/Header";
import Footer from "./ui/Components/Footer";
import { Provider } from "react-redux";
import { store } from "./store/store";

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