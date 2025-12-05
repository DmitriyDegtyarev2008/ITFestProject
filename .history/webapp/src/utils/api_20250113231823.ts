import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/trpc'

export const registerUser = async(email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user.register`, {
            email, password
        })
        return response.data
    } catch (error) {
        console.error('Registration error', error)
        throw error
    }
}

export const loginUser = async (email: string, password: string) => {
    try {
        const response = axios.post(`${API_BASE_URL}/user.login`, {
            email,
            password
        })
        return response
    }
}