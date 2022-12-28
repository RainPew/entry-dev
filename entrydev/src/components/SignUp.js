import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import { useNavigate } from "react-router-dom";
import { SIGN_UP_USER } from '../gql/mutation'

export default function SignUp() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState("")

    const [signUpUser, { data, loading, error }] = useMutation(SIGN_UP_USER)
    
    if (loading) return <div>loading</div>

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signUpUser({
            variables: {
                userNew: formData
            }
        });
        navigate("/login")
    }
    return (
        <div className="form-Login mt-3 container">
            {error && <div>{error.message}</div>}
            {data && data.user && <div>{data.user.firsName}</div>}
            <h1>SignUp</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>firstName</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="firstName"
                        name="firstName"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>lastName</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="lastName"
                        name="lastName"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="email"
                        name="email"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="password"
                        className="form-control"
                        placeholder="password"
                        name="password"
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-outline-primary text-center">SignUp</button>
            </form>

        </div>
    )
}
