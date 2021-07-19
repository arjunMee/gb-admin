import React from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'
import { useLocation } from 'react-router-dom'
import OldSidebar from 'src/components/OldSidebar'

const DefaultLayout = () => {
  const location = useLocation()
  console.log(location)
  return (
    <div>
      {location.pathname === '/dashboard' ? <AppSidebar /> : <OldSidebar />}
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
