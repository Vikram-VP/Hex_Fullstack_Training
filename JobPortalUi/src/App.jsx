import { Route, Routes } from 'react-router'
import Login from './auth/login'
import AdminDashboard from './components/admin/dashboard'

function App() {
  return (
    <>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} /> 
      </Routes>

    </>
  )
}

export default App
