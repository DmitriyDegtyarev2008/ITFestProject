import axios from 'axios'

const API_BASE_URL = 'http://localhost:4000/trpc'

export const registerUser = async(email: string)