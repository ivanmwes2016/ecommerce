import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'



const Layout = ({children}:any) => {
    return (
        <div className="layout">
            <Head>
                <title>Project Ecommerce Store</title>
            </Head>

            <header>
                <Navbar />
            </header>

            <main>
                {children}
            </main>

            <footer>
                
                
            </footer>
        </div>
    )
}

export default Layout
