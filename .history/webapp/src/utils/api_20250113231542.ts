import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/trpc'

export const registerUser = async(email: string, password: string) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user.register`, {
            email, password
        })
        return response.data
    } catch (error) {
        console.error('Registra')
    }
}