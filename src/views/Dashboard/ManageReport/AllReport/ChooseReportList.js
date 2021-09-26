import React from 'react'
import { CButton, CCol, CRow, CContainer, CAvatar } from '@coreui/react'
import ReportUserModal from './ReportUserModal'
import { AppUrl, config } from 'src/config/ApiName'
import axios from 'axios'
import { PropTypes } from 'prop-types'

const image = [
  'https://coreui.io/react/docs/4.0/static/3-07e357f51e1b86d9e741409ac9e2eba5.jpg',
  'https://coreui.io/react/docs/4.0/static/1-34eedf58c0876517e8587997f9625944.jpg',
]

ChooseReportList.propTypes = {
  chooseReportType: PropTypes.string,
  fetchDataParent: PropTypes.object,
}

function ChooseReportList({ chooseReportType, fetchDataParent }) {
  const [ReportUserData, ReportLoadingData] = React.useState([])
  const url = `http://${AppUrl}/api/reports/?q=${chooseReportType}`

  const fetchData = async () => {
    try {
      const { data } = await axios.get(url, config)
      ReportLoadingData(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [url])

  const stateChangeHandler = (id, statusChoice) => {
    axios
      .put(
        `http://${AppUrl}/api/reports/`,
        {
          report_id: id,
          report_status: statusChoice,
        },
        { ...config },
      )
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err))

    fetchData()
    fetchDataParent()
  }

  return (
    <div className="my-4" style={{ border: '1px solid gray', borderRadius: 10 }}>
      <CContainer>
        <div
          className="p-3"
          style={{ display: 'flex', textAlign: 'center', borderBottom: '1px solid gray' }}
        >
          <CCol>User</CCol>
          <CCol>Reports Type</CCol>
          <CCol>Total Reports</CCol>
          <CCol>Status</CCol>
          <CCol xs={5}>Option</CCol>
        </div>
      </CContainer>

      <CContainer>
        <div style={{ maxHeight: 270, overflowY: 'scroll', overflowX: 'hidden' }}>
          {ReportUserData &&
            ReportUserData.map((ReportUserData, index) => {
              return (
                <CRow key={ReportUserData.id} className="py-2">
                  <CCol>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div>
                        <CAvatar src={index % 2 === 0 ? image[0] : image[1]} />
                      </div>
                      <div
                        className="mx-2"
                        style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
                      >
                        <span style={{ fontSize: 14 }}>
                          <strong>{`${ReportUserData?.account_id.user.first_name || 'demo'} ${
                            ReportUserData?.account_id.user.last_name || 'demo'
                          }`}</strong>
                        </span>
                        <span style={{ fontSize: 10 }}>
                          {ReportUserData?.account_id.user.username || 'demo username'}
                        </span>
                      </div>
                    </div>
                  </CCol>
                  <CCol style={{ textAlign: 'center' }}>
                    {ReportUserData?.report_type || 'demo'}
                  </CCol>
                  <CCol style={{ textAlign: 'center' }}>
                    <ReportUserModal
                      id={ReportUserData.id}
                      username={ReportUserData?.account_id.user.username}
                      first_name={ReportUserData?.account_id.user.first_name}
                      last_name={ReportUserData?.account_id.user.last_name}
                      report_type={ReportUserData?.report_type}
                      total_no_Report={ReportUserData?.total_reports}
                    />
                  </CCol>
                  <CCol style={{ textAlign: 'center' }}>
                    {ReportUserData?.report_status || 'demo'}
                  </CCol>
                  <CCol xs={5}>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                      }}
                    >
                      <CButton color="secondary" className="mx-2">
                        View
                      </CButton>

                      {chooseReportType === 'pending' && (
                        <>
                          <CButton
                            color="secondary"
                            className="mx-2"
                            onClick={() => stateChangeHandler(ReportUserData.id, 'safe')}
                          >
                            Safe
                          </CButton>
                          <CButton
                            color="secondary"
                            className="mx-2"
                            onClick={() => stateChangeHandler(ReportUserData.id, 'deleted')}
                          >
                            Delete
                          </CButton>
                        </>
                      )}
                    </div>
                  </CCol>
                </CRow>
              )
            })}
        </div>
      </CContainer>
    </div>
  )
}

export default ChooseReportList
