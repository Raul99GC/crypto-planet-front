import SiteHeader from '@/components/SiteHeader'
import Error404 from '@/screen/Error404'
import Home from '@/screen/Home'
import { Outlet, Route, Routes } from 'react-router'

const Layout = () => {
  return (
    <>
      <SiteHeader />
      <Outlet />
    </>
  )
}

const Navigation = () => {
  return (
    <Routes>
      {/* Rutas con Layout */}
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>

      {/* Ruta para manejo de página no encontrada */}
      <Route path='*' element={<Error404 />} />
    </Routes>
  )
}

export default Navigation
