import { CCard, CCardBody, CCardText, CCardTitle, CRow, CCol } from '@coreui/react'
import React, { lazy } from 'react'
import { AppUrl } from 'src/config/ApiName'
import { useFetch } from 'src/hooks/useFetch.js'
const OverviewWidget = lazy(() => import('../components/widgets/OverviewWidget.js'))
const UserEngagementWidget = lazy(() => import('../components/widgets/UserEngagementWidget.js'))
const TradingTable = lazy(() => import('./component/Trading'))

const Dashboard = () => {
  const [
    data,
    // isDataLoading
  ] = useFetch(`http://${AppUrl}/api/gb-admin/dashboard-statistics/`)

  return (
    <>
      <CRow>
        <CCol sm="6" lg="3">
          <CCard color="info" textColor="white" className="mb-3" style={{ maxWidth: '18rem' }}>
            <CCardBody>
              <CCardTitle>{data?.total_online_users}</CCardTitle>
              <CCardText>Online Users</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="6" lg="3">
          <CCard color="dark" textColor="white" className="mb-3" style={{ maxWidth: '18rem' }}>
            <CCardBody>
              <CCardTitle>{data?.total_users}</CCardTitle>
              <CCardText>Users</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="6" lg="3">
          <CCard color="warning" textColor="white" className="mb-3" style={{ maxWidth: '18rem' }}>
            <CCardBody>
              <CCardTitle>{data?.total_reactions}</CCardTitle>
              <CCardText>Reactions</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
        <CCol sm="6" lg="3">
          <CCard color="danger" textColor="white" className="mb-3" style={{ maxWidth: '18rem' }}>
            <CCardBody>
              <CCardTitle>{data?.total_comments}</CCardTitle>
              <CCardText>Comments</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      <OverviewWidget />
      <UserEngagementWidget />
      <TradingTable />
    </>
  )
}

export default Dashboard
