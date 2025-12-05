import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { TrpcProvider } from './lib/trpc'

import HomePage from './pages/HomePage'
import RegisterPage from './pages/RegisterPage'
import AboutPage from './pages/links/AboutPage'
import Login from './pages/login'

export const App = () => {
  return (
    <TrpcProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/reg" element={<RegisterPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </TrpcProvider>
  )
}
