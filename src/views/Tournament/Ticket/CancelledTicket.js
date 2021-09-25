import {
  CButton,
  CCol,
  CContainer,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
import '../../index.scss'

function CancelledTicket() {
  return (
    <div>
      <h4>Cancelled Tickets</h4>
      <div className="bg-white px-3 py-3 my-3">
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
                  <CTableHeaderCell scope="col">Username</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ticket ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Team Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tournament Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tournament ID</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Date of Purchase</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Cancellation date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ticket Price</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>-</CTableDataCell>
                      <CTableDataCell>-</CTableDataCell>
                      <CTableDataCell>-</CTableDataCell>
                      <CTableDataCell>-</CTableDataCell>
                      <CTableDataCell>-</CTableDataCell>
                      <CTableDataCell>-</CTableDataCell>
                      <CTableDataCell>-</CTableDataCell>
                      <CTableDataCell>-</CTableDataCell>
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

export default CancelledTicket
