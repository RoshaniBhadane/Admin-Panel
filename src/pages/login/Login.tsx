import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { validateEmail, validatePassword, validateCredentials } from './helper'
import { Container, TextField, Button, Box, Typography, Alert } from "@mui/material";
import { AuthenticationContext } from '../../context/Authentication';

export const Login = () => {
    const [userData, setUserData] = useState({
        email: '',
        password: ''
    })
    const [errors, setErrors] = useState({
        short: '',
        emailVal: '',
        authErr: ''
    })
    const navigate = useNavigate();

    const { login } = useContext(AuthenticationContext);

    const handleSubmit = (e: any) => {
        e.preventDefault()
        if (validateFields()) {
            return
        } else {
            if (validateCredentials(userData.email, userData.password)) {
                localStorage.setItem("user", JSON.stringify({ userData }));
                let status = !!localStorage.getItem("user")
                login(status)
                navigate('dashboard')
            }
            else { setErrors(state => ({ ...state, authErr: 'Authentication Failed' })) }
        }
    };

    const validateFields = () => {
        let error = false
        if (validateEmail(userData.email)) {
            setErrors(state => ({ ...state, emailVal: 'Invalid email' }))
            error = true
        } else { setErrors(state => ({ ...state, emailVal: '' })) }
        if (validatePassword(userData.password)) {
            setErrors(state => ({ ...state, short: 'Password must contain at least 5 characters' }))
            error = true
        } else { setErrors(state => ({ ...state, short: '' })) }
        return error
    }

    const handleChange = (e: any) => {
        const value = e.target.value
        setUserData({
            ...userData,
            [e.target.name]: value,
        })
    }

    return (
        <Container maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Sign In
                </Typography>
                <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={userData.email}
                        error={Boolean(errors?.emailVal)}
                        helperText={errors?.emailVal}
                        onChange={handleChange}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={userData.password}
                        error={errors.short !== ''}
                        helperText={errors.short}
                        onChange={handleChange}
                    />
                    {errors.authErr && <Alert severity="error">{errors.authErr}</Alert>}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    )
}

