import React from 'react'
import { CButton, CFormSelect, CCol, CRow, CContainer, CAvatar } from '@coreui/react'
import { AppUrl, config } from 'src/config/ApiName'
import { useFetch } from 'src/hooks/useFetch'
import Skeleton from 'src/views/components/reusable/skeleton'
import SkeletonWrapper from 'src/views/components/reusable/SkeletonWrapper'
import './index.scss'
import { NavLink } from 'react-router-dom'
import VerifySvg from '../components/VerifySvg'
import axios from 'axios'
import AccessModal from '../../component/AccessModal'

const image = [
  'https://coreui.io/react/docs/4.0/static/3-07e357f51e1b86d9e741409ac9e2eba5.jpg',
  'https://coreui.io/react/docs/4.0/static/1-34eedf58c0876517e8587997f9625944.jpg',
]

function AllUser() {
  const [state, setState] = React.useState([])

  const [data, isDataLoading] = useFetch(`http://${AppUrl}/api/gb-admin/users/?q=all`, setState)

  const changeHandler = (id, e, title) => {
    const elementsIndex = state.findIndex((element) => element.user.id === id)
    let newArray = [...state]
    if (title === 'verify') {
      console.log('1', title)
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        is_verified: !newArray[elementsIndex].is_verified,
      }
      setState(newArray)

      axios
        .put(
          `http://${AppUrl}/api/gb-admin/user/verify/`,
          {
            username: newArray[elementsIndex].user.username,
            is_verified: e.target.checked,
          },
          { ...config },
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
    } else if (title === 'status') {
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        status:
          e.target.value === 'active'
            ? 0
            : e.target.value === 'suspend'
            ? 1
            : e.target.value === 'Deleted'
            ? 2
            : e.target.value === 'ban' && 3,
      }
      setState(newArray)

      axios
        .post(
          `http://${AppUrl}/api/gb-admin/users/status/`,
          {
            username: newArray[elementsIndex].user.username,
            action: e.target.value,
          },
          {
            ...config,
          },
        )
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
      // .finally(() => setRender(!render))
    }
  }

  return (
    <div className="bg-white px-3 py-3 my-2">
      {console.log(state)}
      <div className="d-flex justify-content-between">
        <h4>All Users</h4>
        <CButton color="secondary" className="mx-2">
          Filter
        </CButton>
      </div>
      <hr />
      <div className="my-3">
        <form>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              id="formGroupExampleInput"
              placeholder="Search the user"
            />
          </div>
        </form>
      </div>
      <div className="my-4">
        <CContainer>
          <div style={{ maxHeight: 360, overflowY: 'scroll', overflowX: 'hidden' }}>
            {!isDataLoading && state.length !== 0
              ? state.map(
                  (
                    {
                      user: { last_name, username, first_name, id },
                      profile_picture,
                      is_verified,
                      status,
                    },
                    index,
                  ) => {
                    return (
                      <CRow key={id} className="my-3">
                        <CCol>
                          <div className="d-flex align-items-center">
                            <div>
                              <CAvatar
                                src={profile_picture || index % 2 === 0 ? image[0] : image[1]}
                              />
                            </div>
                            <div
                              className="d-flex align-items-center mx-2"
                              style={{
                                flexDirection: 'column',
                              }}
                            >
                              <span style={{ fontSize: 14 }}>
                                <strong>{`${first_name} ${last_name}`}</strong>
                              </span>
                              <span style={{ fontSize: 10 }}>{username}</span>
                            </div>
                            {is_verified && <VerifySvg />}
                          </div>
                        </CCol>
                        <CCol xs={7}>
                          <div className="d-flex align-items-center">
                            <input
                              type="checkbox"
                              className="btn-check"
                              id={`isVerified-btn-check-${index}`}
                              checked={is_verified}
                              onChange={(e) => changeHandler(id, e, 'verify')}
                            />
                            <label
                              className="btn btn-outline-primary mx-2"
                              htmlFor={`isVerified-btn-check-${index}`}
                              style={{ minWidth: 80 }}
                            >
                              {data?.is_verified ? 'Verified' : 'Verify'}
                            </label>
                            <AccessModal />

                            <CButton color="secondary" className="mx-2">
                              View Profile
                            </CButton>

                            <NavLink to={`/dashboard/home/users/profile/${username}`}>
                              <CButton color="secondary" className="mx-2">
                                Account Info
                              </CButton>
                            </NavLink>
                            <CFormSelect
                              aria-label="Default select example"
                              style={{ display: 'inline', width: 170 }}
                              onChange={(e) => changeHandler(id, e, 'status')}
                              value={
                                status === 0
                                  ? 'active'
                                  : status === 1
                                  ? 'suspend'
                                  : status === 2
                                  ? 'Deleted'
                                  : status === 3 && 'ban'
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
                    )
                  },
                )
              : new Array(4).fill(4).map((_, index) => {
                  return (
                    <div key={index} className="skeleton">
                      <SkeletonWrapper
                      // theme="dark"
                      >
                        <CRow>
                          <CCol>
                            <div className="d-flex align-items-center">
                              <Skeleton type="avatar" />

                              <div
                                className="mx-2 d-flex align-items-center"
                                style={{
                                  flexDirection: 'column',
                                }}
                              >
                                <Skeleton type="title" />
                                <Skeleton type="text" />
                              </div>
                            </div>
                          </CCol>
                          <CCol>
                            <div className="d-flex align-items-center">
                              <Skeleton type="button" />
                              <Skeleton type="button" />
                              <Skeleton type="button" />
                              <Skeleton type="button" />
                            </div>
                          </CCol>
                        </CRow>
                      </SkeletonWrapper>
                    </div>
                  )
                })}
          </div>
        </CContainer>
      </div>
    </div>
  )
}

export default AllUser
