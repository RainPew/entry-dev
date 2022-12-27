import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Navbar() {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Navbar</a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        {
                            !token ?
                                <>
                                    <li className="nav-item mr-3">
                                        <Link to="/">home</Link>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <Link to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item mr-3">
                                        <Link to="/signin">Signup</Link>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="nav-item mr-3">
                                        <Link to="/animals">animals</Link>
                                    </li>
                                    <li>
                                        <button className="btn btn-outline-danger" onClick={() => {
                                            localStorage.removeItem('token')
                                            navigate("/")
                                        }}>Logout</button>
                                    </li>
                                </>
                        }
                    </ul>
                </div>
            </nav>
        </div>
    )
}
