import React from 'react'
import { CButton, CFormSelect, CCol, CRow, CContainer, CAvatar } from '@coreui/react'
import { PropTypes } from 'prop-types'
import axios from 'axios'
import { AppUrl, token } from 'src/config/ApiName'
import VerifySvg from '../components/VerifySvg'
import { NavLink } from 'react-router-dom'

const image = [
  'https://coreui.io/react/docs/4.0/static/3-07e357f51e1b86d9e741409ac9e2eba5.jpg',
  'https://coreui.io/react/docs/4.0/static/1-34eedf58c0876517e8587997f9625944.jpg',
]

function UserTableRow({ data }) {
  const verifyHandler = (username, e) => {
    axios({
      method: 'put',
      url: `http://${AppUrl}/api/gb-admin/user/verify/`,
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Token ' + token,
      },
      data: {
        username: username,
        is_verified: e.target.checked,
      },
    })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))
    // .finally(() => setRender(!render))
  }
  console.log(data)
  return (
    <>
      <CRow className="my-3">
        <CCol>
          <div className="d-flex align-items-center">
            <div>
              <CAvatar src={data.profile_picture || data.id % 2 === 0 ? image[0] : image[1]} />
            </div>
            <div
              className="d-flex align-items-center mx-2"
              style={{
                flexDirection: 'column',
              }}
            >
              <span style={{ fontSize: 14 }}>
                <strong>{`${data?.user.first_name} ${data?.user.last_name}`}</strong>
              </span>
              <span style={{ fontSize: 10 }}>{data?.user.username}</span>
            </div>
            {data?.is_verified && <VerifySvg />}
          </div>
        </CCol>
        <CCol xs={7}>
          <div className="d-flex align-items-center">
            <input
              type="checkbox"
              className="btn-check"
              id={`isVerified-btn-check-${data.user.id}`}
              checked={data?.is_verified}
              onChange={(e) => verifyHandler(data?.user.username, e)}
            />
            <label
              className="btn btn-outline-primary mx-2"
              htmlFor={`isVerified-btn-check-${data.user.id}`}
              style={{ minWidth: 80 }}
            >
              {data?.is_verified ? 'Verified' : 'Verify'}
            </label>
            <CButton color="secondary" className="mr-2">
              Admin View
            </CButton>
            <CButton color="secondary" className="mx-2">
              View Profile
            </CButton>
            <NavLink to={`/dashboard/home/users/profile/${data?.user.username}`}>
              <CButton color="secondary" className="mx-2">
                Account Info
              </CButton>
            </NavLink>
            <CFormSelect
              aria-label="Default select example"
              style={{ display: 'inline', width: 170 }}
              value={
                data.status === 0
                  ? 'Active'
                  : data.status === 1
                  ? 'Suspended'
                  : data.status === 2
                  ? 'Deleted'
                  : data.status === 3 && 'Banned'
              }
            >
              <option value="Active">Active</option>
              <option value="Suspended">Suspend</option>
              <option value="Deleted">Delete</option>
              <option value="Banned">Banned</option>
            </CFormSelect>
          </div>
        </CCol>
      </CRow>
    </>
  )
}

UserTableRow.propTypes = {
  data: PropTypes.object,
}

export default UserTableRow
