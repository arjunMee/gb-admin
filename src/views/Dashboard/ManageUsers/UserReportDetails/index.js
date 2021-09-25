import {
  CAvatar,
  CButton,
  CCol,
  CContainer,
  CRow,
  CBreadcrumb,
  CBreadcrumbItem,
} from '@coreui/react'
import React from 'react'
import { useParams } from 'react-router'
import { NavLink } from 'react-router-dom'
import { useFetch } from 'src/hooks/useFetch'
import { AppUrl, config } from 'src/config/ApiName'
import ReportTable from './reportTable'
const image = [
  'https://coreui.io/react/docs/4.0/static/3-07e357f51e1b86d9e741409ac9e2eba5.jpg',
  'https://coreui.io/react/docs/4.0/static/1-34eedf58c0876517e8587997f9625944.jpg',
]

function UserReport() {
  const { userId } = useParams()
  const [data, isDataLoading] = useFetch(
    `http://${AppUrl}/api/users/profile/?profile_name=${userId}`,
  )

  return (
    <div className="bg-white px-3 py-3 my-2">
      <CContainer>
        <CRow className="my-3">
          <CCol>
            <h4 style={{ textTransform: 'capitalize' }}>
              {`${data?.user.first_name} ${data?.user.last_name}'s Report`}
            </h4>
            <CBreadcrumb>
              <CBreadcrumbItem>
                <NavLink to={`/dashboard/home/users/all`}>All User</NavLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem>
                <NavLink to={`/dashboard/home/users/profile/${data?.user.username}`}>
                  <span>{data?.user.username}</span>
                </NavLink>
              </CBreadcrumbItem>
              <CBreadcrumbItem active>
                <span>Report</span>
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
        {/* <CContainer>
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
                      <strong>{`${data?.user.first_name} ${data?.user.last_name}`}</strong>
                    </span>
                    <span style={{ fontSize: 10 }}>{data?.user.username}</span>
                  </div>
                </div>
              </CCol>
            </CRow>
          </div>
        </CContainer> */}
      </div>

      <div className="my-2">
        <ReportTable />
      </div>
    </div>
  )
}

export default UserReport
