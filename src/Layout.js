import React from "react";
import { Link } from "react-router-dom";

export default function Layout() {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/search-user" search='user'>Search User Details</Link></li>
                    <li><Link to="/search-repo" search='repo'>Search User Repos</Link></li>
                </ul>
            </nav>
        </>
    )
}