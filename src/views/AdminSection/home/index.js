import { CCard, CCardBody, CCardText, CCardTitle, CCol, CContainer, CRow } from '@coreui/react'
import React, { lazy } from 'react'

import Graphy from 'src/views/Tournament/Home/component/TournmanetGraph'
import { AppUrl } from 'src/config/ApiName'
import { useFetch } from 'src/hooks/useFetch.js'
import GbTournament from './component/GbTournament'
import Activity from './component/Activity'
import Tasks from './component/Tasks'
import AdminTable from './component/AdminTable'

function HomePage() {
  const [
    data,
    // isDataLoading
  ] = useFetch(`http://${AppUrl}/api/gb-admin/dashboard-statistics/`)

  return (
    <div>
      <CContainer>
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
      </CContainer>

      <CContainer className="p-0">
        <Graphy />
      </CContainer>

      <CContainer className="p-0">
        <CRow xs={{ gutterX: 2 }}>
          <CCol>
            <GbTournament />
          </CCol>

          <CCol>
            <Activity />
          </CCol>

          <CCol>
            <Tasks />
          </CCol>
        </CRow>
      </CContainer>
      <AdminTable />
    </div>
  )
}

export default HomePage
