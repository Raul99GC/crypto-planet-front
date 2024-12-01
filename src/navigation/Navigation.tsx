import { useLocation, Outlet, Route, Routes } from 'react-router'
import Footer from '@/components/Footer'
import SiteHeader from '@/components/SiteHeader'
import Error404Page from '@/screen/Error404Page'
import HomePage from '@/screen/HomePage'
import LoginPage from '@/screen/LoginPage'
import SignupPage from '@/screen/SignUp'

const Layout = () => {
  const location = useLocation()

  // Verifica si la ruta actual es login o signup
  const isLoginOrSignup = location.pathname === '/login' || location.pathname === '/signup'

  return (
    <div className='grid min-h-screen grid-rows-[auto_1fr_auto]'>
      <SiteHeader />
      <Outlet />
      {/* Solo muestra el Footer si no es Login o Signup */}
      {!isLoginOrSignup && <Footer />}
    </div>
  )
}

const Navigation = () => {
  return (
    <Routes>
      {/* Rutas con Layout */}
      <Route element={<Layout />}>
        <Route path='/home' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
      </Route>

      {/* Ruta para manejo de página no encontrada */}
      <Route path='*' element={<Error404Page />} />
    </Routes>
  )
}

export default Navigation
