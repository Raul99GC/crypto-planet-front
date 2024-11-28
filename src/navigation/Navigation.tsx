import SiteHeader from '@/components/SiteHeader'
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
      <Route element={<Layout />}>
        <Route index element={<Home />} />

      </Route>

    </Routes>
  )
}

export default Navigation
