import React, { useState } from 'react'
import {
  CButton,
  CCol,
  CContainer,
  CFormLabel,
  CFormSelect,
  CModal,
  CModalBody,
  CModalHeader,
  CModalTitle,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import '../../index.scss'

const AddNewModal = () => {
  const [visibleLg, setVisibleLg] = useState(false)

  return (
    <>
      <div>
        <CButton onClick={() => setVisibleLg(!visibleLg)}>Add New</CButton>

        <CModal size="lg" visible={visibleLg}>
          <CModalHeader onDismiss={() => setVisibleLg(false)}>
            <CModalTitle>Add Banner Advertisement</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div>
              <CFormLabel htmlFor="id/name">Event ID/Event Name</CFormLabel>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Search the user"
              />
              <CFormLabel htmlFor="bannerImage ">Banner Image </CFormLabel>
              <div style={{ border: '1px solid gray', height: 200 }}></div>
              <CFormLabel htmlFor="id/name">Duration </CFormLabel>
            </div>
            <button style={{ width: '100%' }}>Submit</button>
          </CModalBody>
        </CModal>
      </div>
    </>
  )
}

function BannedAds() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h4>Banned Ads</h4>
        <AddNewModal />
      </div>
      <div iv className="bg-white px-3 py-3 my-3">
        <div className="my-3">
          <form>
            <CContainer>
              <CRow>
                <CCol xs={8}>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="formGroupExampleInput"
                      placeholder="Search the user"
                    />
                  </div>
                </CCol>
                <CCol>
                  <CButton color="secondary" className="mx-1">
                    Filter By date
                  </CButton>

                  <CButton color="secondary" className="mx-1">
                    Generate Report
                  </CButton>
                </CCol>
              </CRow>
            </CContainer>
          </form>
        </div>
        <div className="my-3">
          <div className="tableDiv">
            <CTable className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tournament Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Organizer Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Event ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ad Budget </CTableHeaderCell>
                  <CTableHeaderCell scope="col">Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Event Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Options</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>GamersBack</CTableDataCell>
                      <CTableDataCell>Gamersback Pvt Ltd</CTableDataCell>
                      <CTableDataCell>2000</CTableDataCell>
                      <CTableDataCell>2000</CTableDataCell>
                      <CTableDataCell>Active</CTableDataCell>
                      <CTableDataCell>0</CTableDataCell>
                      <CTableDataCell>
                        <CFormSelect aria-label="Default select example">
                          <option>Select</option>
                          <option value="1">One</option>
                          <option value="2">Two</option>
                          <option value="3">Three</option>
                        </CFormSelect>
                      </CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BannedAds
