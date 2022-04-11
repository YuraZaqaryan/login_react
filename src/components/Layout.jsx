import React from "react";
import {Link, Outlet} from 'react-router-dom'
const Layout = () => {
    return(
        <div className="main">
            <header>
                <ul>
                    <li><Link to='/'> Home Page </Link></li>
                    <li><Link to='about'> About us </Link></li>
                    <li><Link to='login'> Sign in </Link></li>
                    <li><Link to='register'> Sign up </Link></li>
                </ul>
            </header>
            <main><Outlet /></main>
            <footer>
                <ul>
                    <li>Facebook</li>
                    <li>Instagram</li>
                    <li>Meta</li>
                </ul>
                <ul>
                    <li>Our adress</li>
                    <li>Contact us</li>
                </ul>
                <ul>
                    <li><Link to='/'> Home Page </Link></li>
                    <li><Link to='about'> About us </Link></li>
                </ul>
            </footer>
        </div>
    )
}
export default Layout;