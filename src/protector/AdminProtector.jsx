import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import decodeJWT from '../decode/decodeJWT'

const AdminProtector = ({children}) => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()
    const decode = decodeJWT(token)

    useEffect(() => {
        if (!token || decode.role !== 'Admin') {
            navigate('/')
        }
    }, [])
    return (
        <div>
            {children}
        </div>
    )
}

export default AdminProtector
