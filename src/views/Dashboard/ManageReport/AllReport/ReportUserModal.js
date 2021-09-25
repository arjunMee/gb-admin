import {
  CAvatar,
  CButton,
  CCol,
  CContainer,
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
import axios from 'axios'
import { PropTypes } from 'prop-types'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { AppUrl, config } from 'src/config/ApiName'

const image = [
  'https://coreui.io/react/docs/4.0/static/3-07e357f51e1b86d9e741409ac9e2eba5.jpg',
  'https://coreui.io/react/docs/4.0/static/1-34eedf58c0876517e8587997f9625944.jpg',
]

const ReportUserModal = ({ id, username, first_name, last_name, report_type, total_no_Report }) => {
  const [visible, setVisible] = React.useState(false)
  const [ReportUserData, ReportLoadingData] = React.useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://${AppUrl}/api/reports/${id}/`, config)
      ReportLoadingData(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <CButton color="secondary" className="mr-2" onClick={() => setVisible(!visible)}>
        {total_no_Report}
      </CButton>

      <CModal size="xl" visible={visible}>
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle>Report Details</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CContainer>
            <div>
              <CRow className="py-2">
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
                        <strong>{`${first_name} ${last_name}`}</strong>
                      </span>
                      <span style={{ fontSize: 10 }}>{username}</span>
                    </div>
                  </div>
                </CCol>
                <CCol style={{ textAlign: 'center' }}>
                  <span style={{ display: 'block' }}>
                    <strong>Report Type</strong>
                  </span>
                  <span>{report_type}</span>
                </CCol>

                <CCol xs={5}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'flex-end',
                    }}
                  >
                    <NavLink to={``}>
                      <CButton color="secondary" className="mx-2">
                        View
                      </CButton>
                    </NavLink>
                    {/* <CButton color="secondary" className="mx-2">
                      Safe
                    </CButton>
                    <CButton color="secondary" className="mx-2">
                      Delete
                    </CButton> */}
                  </div>
                </CCol>
              </CRow>
            </div>
          </CContainer>
          <hr />
          <div style={{ maxHeight: 350, overflowY: 'scroll' }}>
            <CTable>
              <CTableHead>
                <CTableRow>
                  <CTableHeaderCell scope="col">User Name</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Report Category</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Message</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {ReportUserData &&
                  ReportUserData.map((ReportUserData, index) => {
                    return (
                      <CTableRow key={index}>
                        <CTableHeaderCell scope="row">
                          {ReportUserData?.reported_by.user.username}
                        </CTableHeaderCell>
                        <CTableDataCell>{ReportUserData?.category_id.category_name}</CTableDataCell>
                        <CTableDataCell>
                          {ReportUserData?.reported_by.user_remarks || 'demo message'}
                        </CTableDataCell>
                      </CTableRow>
                    )
                  })}
              </CTableBody>
            </CTable>
          </div>
        </CModalBody>
      </CModal>
    </>
  )
}

ReportUserModal.propTypes = {
  id: PropTypes.number,
  total_no_Report: PropTypes.number,
  username: PropTypes.string,
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  report_type: PropTypes.string,
}

export default ReportUserModal
