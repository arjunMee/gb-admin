import { CButton } from '@coreui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { useFetch } from 'src/hooks/useFetch'
import { AppUrl } from 'src/config/ApiName'
import { NavLink } from 'react-router-dom'

function Index() {
  const [data, isDataLoading] = useFetch(`http://${AppUrl}/api/gb-admin/admin-user/?q=all`)
  const dispatch = useDispatch()
  const profile = useSelector((state) => state.profile.profileObject)
  return (
    <div className="bg-white px-3 py-3 my-2">
      <div className="d-flex justify-content-between">
        <h4>Employee</h4>
        {profile.access === 'admin' && (
          <NavLink to="/generalAdmin/Setting/addUser">
            <CButton color="danger" className="mx-2">
              Add User
            </CButton>
          </NavLink>
        )}
      </div>
      <hr />
      <div>
        <CTable borderless>
          <CTableHead>
            <CTableRow>
              <CTableHeaderCell>S.No</CTableHeaderCell>
              <CTableHeaderCell>Name</CTableHeaderCell>
              <CTableHeaderCell>Role</CTableHeaderCell>
              <CTableHeaderCell>Duration</CTableHeaderCell>
              <CTableHeaderCell>Contact Number</CTableHeaderCell>
              <CTableHeaderCell>Options</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data &&
              !isDataLoading &&
              data.map((dataItem, index) => {
                console.log(dataItem)
                return (
                  <CTableRow key={dataItem.id}>
                    <CTableDataCell scope="row">{index + 1}</CTableDataCell>
                    <CTableDataCell>{`${dataItem.user.first_name} ${dataItem.user.last_name}`}</CTableDataCell>
                    <CTableDataCell>{`${dataItem.position}`}</CTableDataCell>
                    <CTableDataCell>{`${dataItem.duration_start_date} - ${
                      dataItem.duration_end_date || 'present'
                    }`}</CTableDataCell>
                    <CTableDataCell>{`${dataItem.contact_number}`}</CTableDataCell>

                    <CTableDataCell>
                      <NavLink to={`/generalAdmin/employee-list/${dataItem.id}`}>
                        <button className="mx-2">View User</button>
                      </NavLink>
                    </CTableDataCell>
                  </CTableRow>
                )
              })}
          </CTableBody>
        </CTable>
      </div>
    </div>
  )
}

export default Index
