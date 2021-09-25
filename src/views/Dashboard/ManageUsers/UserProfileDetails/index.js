import {
  CAvatar,
  CButton,
  CCol,
  CContainer,
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableRow,
  CBreadcrumb,
  CBreadcrumbItem,
} from '@coreui/react'
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useFetch } from 'src/hooks/useFetch'
import { AppUrl, config } from 'src/config/ApiName'

import axios from 'axios'
import AccessModal from '../../component/AccessModal'
import PlayerTable from './PlayerTable'

const image = [
  'https://coreui.io/react/docs/4.0/static/3-07e357f51e1b86d9e741409ac9e2eba5.jpg',
  'https://coreui.io/react/docs/4.0/static/1-34eedf58c0876517e8587997f9625944.jpg',
]

function UserProfile() {
  const { userId } = useParams()
  const [state, setState] = React.useState({
    user: { id: '', username: '', first_name: '', last_name: '', email: '' },
    status: 0,
    is_verified: '',
    gender: '',
    birthday: '',
  })

  const [data, isDataLoading] = useFetch(
    `http://${AppUrl}/api/users/profile/?profile_name=${userId}`,
    setState,
  )

  const changeHandler = (id, e, title) => {
    if (title === 'verify') {
      setState((prev) => ({
        ...prev,
        is_verified: e.target.checked,
      }))

      axios
        .put(
          `http://${AppUrl}/api/gb-admin/user/verify/`,
          {
            username: state.user.username,
            is_verified: e.target.checked,
          },
          { ...config },
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    } else if (title === 'status') {
      setState((prev) => ({
        ...prev,
        status:
          e.target.value === 'active'
            ? 0
            : e.target.value === 'suspend'
            ? 1
            : e.target.value === 'Deleted'
            ? 2
            : e.target.value === 'ban' && 3,
      }))

      axios
        .post(
          `http://${AppUrl}/api/gb-admin/users/status/`,
          {
            username: state.user.username,
            action: e.target.value,
          },
          {
            ...config,
          },
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="bg-white px-3 py-3 my-2">
      <CContainer>
        <CRow className="my-3">
          <CCol>
            <h4 style={{ textTransform: 'capitalize' }}>
              {`${state.user.first_name} ${state.user.last_name}'s Details`}
            </h4>
            <CBreadcrumb>
              <CBreadcrumbItem>
                <NavLink to={`/dashboard/home/users/all`}>All User</NavLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>
                <span>{state.user.username}</span>
              </CBreadcrumbItem>
            </CBreadcrumb>
          </CCol>
          <CCol>
            <CButton color="secondary" className="mx-2" style={{ float: 'right' }}>
              Filter
            </CButton>
          </CCol>
        </CRow>
      </CContainer>

      <hr />
      <div className="my-2">
        <CContainer>
          <div>
            <CRow className="my-3">
              <CCol>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div>
                    <CAvatar src={image[0]} />
                  </div>
                  <div
                    className="mx-2"
                    style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
                  >
                    <span style={{ fontSize: 14 }}>
                      <strong> {`${state.user.first_name} ${state.user.last_name}`}</strong>
                    </span>
                    <span style={{ fontSize: 10 }}>{state.user.username}</span>
                  </div>
                </div>
              </CCol>
              <CCol xs={9}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                  {/* <Modal /> */}
                  <input
                    type="checkbox"
                    className="btn-check"
                    id={`isVerified-btn-check`}
                    checked={state?.is_verified}
                    onChange={(e) => changeHandler(state.id, e, 'verify')}
                  />
                  <label
                    className="btn btn-outline-primary mx-2"
                    htmlFor={`isVerified-btn-check`}
                    style={{ minWidth: 80 }}
                  >
                    {state?.is_verified ? 'Verified' : 'Verify'}
                  </label>
                  <AccessModal />
                  <CButton color="secondary" className="mx-2">
                    View Profile
                  </CButton>
                  <CButton color="secondary" className="mx-2">
                    Edit Account
                  </CButton>
                  <NavLink to={`/dashboard/home/users/report/${state.user.username}`}>
                    <CButton color="secondary" className="mx-2">
                      Reports
                    </CButton>
                  </NavLink>
                  <CFormSelect
                    aria-label="Default select example"
                    style={{ display: 'inline', maxWidth: 170 }}
                    onChange={(e) => changeHandler(state.id, e, 'status')}
                    value={
                      state?.status === 0
                        ? 'active'
                        : state?.status === 1
                        ? 'suspend'
                        : state?.status === 2
                        ? 'Deleted'
                        : state?.status === 3 && 'ban'
                    }
                  >
                    <option value="active">Active</option>
                    <option value="suspend">Suspend</option>
                    <option value="ban">Banned</option>
                    <option value="Deleted">Delete</option>
                  </CFormSelect>
                </div>
              </CCol>
            </CRow>
          </div>
        </CContainer>
      </div>
      <div className="my-2">
        <CTable borderless>
          <CTableBody>
            <CTableRow>
              <CTableDataCell>
                Name : {`${state.user.first_name} ${state.user.last_name}`}{' '}
              </CTableDataCell>
              <CTableDataCell>Country : {`not available`} </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Date of Birth : {`${state?.birthday}`}</CTableDataCell>
              <CTableDataCell>Mobile No : {`${state?.contact_number}`}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Gender : {`${state?.gender}`}</CTableDataCell>
              <CTableDataCell>Join Date : {`-`}</CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>User Name : {`${state.user.username}`}</CTableDataCell>
              <CTableDataCell>
                {`IP Address's Used :`} {`-`}
              </CTableDataCell>
            </CTableRow>
            <CTableRow>
              <CTableDataCell>Email Id : {`${state.user.email}`}</CTableDataCell>
            </CTableRow>
          </CTableBody>
        </CTable>
        <div>
          <p> Social Links :</p>
          <p style={{ textIndent: '1rem', marginBottom: 5 }}>
            instagram - {`${state?.instagram || ''}`}
          </p>
          <p style={{ textIndent: '1rem', marginBottom: 5 }}>
            twitter - {`${state?.twitter || ''}`}{' '}
          </p>
          <p style={{ textIndent: '1rem', marginBottom: 5 }}>
            facebook - {`${state?.facebook || ''}`}
          </p>
          <p style={{ textIndent: '1rem', marginBottom: 5 }}>
            discord - {`${state?.discord || ''}`}{' '}
          </p>
          <p style={{ textIndent: '1rem', marginBottom: 5 }}>
            youtube - {`${state?.youtube || ''}`}{' '}
          </p>
        </div>
      </div>
      <div className="my-2">
        <h4>Statistics</h4>
        <PlayerTable id={state.user.id} />
      </div>
    </div>
  )
}

export default UserProfile
