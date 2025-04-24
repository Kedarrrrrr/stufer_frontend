import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserProtector = ({children}) => {
 
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/login')
        }
    }, [])


    return (
        <div>
            {children}
        </div>
    )
}

export default UserProtector
