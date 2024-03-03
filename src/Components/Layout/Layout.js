import React from 'react'
import Navs from '../Nav/Navs'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <>
            <Navs />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout
