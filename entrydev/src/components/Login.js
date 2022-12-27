import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useMutation } from '@apollo/client'
import { LOGIN_ANIMALS } from '../gql/mutation'

export default function Login() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState("")
    const [signinUser, { data, loading, error }] = useMutation(LOGIN_ANIMALS)

    if(loading) return <div>loading...</div>
    if(data){
        localStorage.setItem("token", data.user.token)
        navigate("/animals")
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        signinUser({
            variables: {
                userSignin: formData
            }
        })
    }
    return (
        <div className="form-Login mt-3 container">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
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
                <button type="submit" className="btn btn-outline-primary text-center">Login</button>
            </form>

        </div>
    )
}
