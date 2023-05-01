import React from 'react'
import "../styles/styles.css"
//import { SidebarData } from "./SidebarData"
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="Sidebar">
            <ul className='SidebarList'>
                <li className="row">
                    <Link to="/" className="Sidebarlist.row">Home </Link>

                </li>
                <li className="row">
                    <Link to="/profiles" className="Sidebarlist.row">Members</Link>
                </li>
                <li className="row">
                    <Link to="/" className="Sidebarlist.row">Categories </Link>
                </li>
            </ul>
        </div>
    );

}

export default Sidebar