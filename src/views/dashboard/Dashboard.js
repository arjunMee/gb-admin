import React, { lazy } from 'react'
const OverviewWidget = lazy(() => import('../components/widgets/OverviewWidget.js'))
const WidgetsBrand = lazy(() => import('../components/widgets/WidgetStatGroup.js'))
const UserEngagementWidget = lazy(() => import('../components/widgets/UserEngagementWidget.js'))

const Dashboard = () => {
  const random = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  return (
    <>
      <WidgetsBrand />
      <OverviewWidget />
      <UserEngagementWidget />
    </>
  )
}

export default Dashboard
