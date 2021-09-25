import {
  CButton,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React from 'react'
import '../../../index.scss'

function BookedTickets() {
  return (
    <div className="bg-white px-3 py-3 my-2">
      <div className="d-flex justify-content-between">
        <h5>Booked Tickets</h5>
        <CButton color="secondary" className="mx-2">
          Show All
        </CButton>
      </div>
      <hr />
      <div className="tableDiv">
        <CTable className="table">
          <CTableHead className="table-length">
            <CTableRow>
              <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Tournament Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Ticket Number</CTableHeaderCell>
              <CTableHeaderCell scope="col">Team Name</CTableHeaderCell>
              <CTableHeaderCell scope="col">Email Id</CTableHeaderCell>
              <CTableHeaderCell scope="col">Contact Number</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {new Array(8).fill(1).map((_, index) => {
              return (
                <CTableRow key={index}>
                  <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                  <CTableDataCell>demo {index + 1}</CTableDataCell>
                  <CTableDataCell>demo {index + 1}</CTableDataCell>
                  <CTableDataCell>demo {index + 1}</CTableDataCell>
                  <CTableDataCell>demo {index + 1}</CTableDataCell>
                  <CTableDataCell>demo {index + 1}</CTableDataCell>
                </CTableRow>
              )
            })}
          </CTableBody>
        </CTable>
      </div>
    </div>
  )
}

export default BookedTickets
