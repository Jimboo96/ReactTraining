import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
            <a className="brand-logo">ReactApp</a>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/hoc">HOC Demo</NavLink></li>
                <li><NavLink to="/todo">Todo App</NavLink></li>
            </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)