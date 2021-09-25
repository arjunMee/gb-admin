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
function CancelledEvent() {
  return (
    <div>
      <h4>Cancelled Events</h4>
      <div className=" px-3 py-3 my-3">
        <div className="py-3 my-2 bg-white">
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
        <div className="py-3 bg-white">
          <div className="tableDiv">
            <CTable className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tournament Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Organizer Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Ticket Sold</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Tickets Available</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Event Status</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Total Revenue</CTableHeaderCell>
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
                        <button className="mx-1">X</button>
                        <button className="mx-1">X</button>
                        <button className="mx-1">X</button>
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

export default CancelledEvent
