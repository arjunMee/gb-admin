import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { useLocation } from 'react-router-dom'
import TournamentSidebar from 'src/components/TournamentSidebar'
import AdminSidebar from 'src/components/AdminSidebar'

const DefaultLayout = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      {location.pathname.includes('/dashboard/') && <AppSidebar />}
      {location.pathname.includes('/tournament/') && <TournamentSidebar />}
      {location.pathname.includes('/generalAdmin/') && <AdminSidebar />}
      {/* <AppSidebar /> */}
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
