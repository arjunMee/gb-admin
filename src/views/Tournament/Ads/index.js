import { CCol, CContainer, CRow } from '@coreui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'

function index() {
  return (
    <div className="p-1">
      <h5>Ads Management</h5>
      <hr />
      <CContainer>
        <CRow>
          <CCol xs={3}>
            <NavLink to="/tournament/ads/banner">
              <div
                style={{ minHeight: 300, borderRadius: 10, display: 'grid', placeItems: 'center' }}
                className="bg-white"
              >
                <p>Banner Ads</p>
              </div>
            </NavLink>
          </CCol>
          <CCol xs={3}>
            <div
              style={{ minHeight: 300, borderRadius: 10, display: 'grid', placeItems: 'center' }}
              className="bg-white"
            >
              <p>Featured Events</p>
            </div>
          </CCol>
          <CCol xs={3}>
            <div
              style={{ minHeight: 300, borderRadius: 10, display: 'grid', placeItems: 'center' }}
              className="bg-white"
            >
              <p>Social Media Ads</p>
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default index
