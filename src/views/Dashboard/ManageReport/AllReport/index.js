import React from 'react'
import { CButton, CCol, CRow, CContainer, CAvatar } from '@coreui/react'
import { NavLink } from 'react-router-dom'
import ReportUserModal from './ReportUserModal'
import { useFetch } from 'src/hooks/useFetch'
import { AppUrl, config } from 'src/config/ApiName'
import axios from 'axios'
import ChooseReportList from './ChooseReportList'

const image = [
  'https://coreui.io/react/docs/4.0/static/3-07e357f51e1b86d9e741409ac9e2eba5.jpg',
  'https://coreui.io/react/docs/4.0/static/1-34eedf58c0876517e8587997f9625944.jpg',
]
//
function AllReport() {
  const [chooseReportType, setChooseReportType] = React.useState('pending')
  const [statisticData, statisticLoadingData] = React.useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get(`http://${AppUrl}/api/reports/statistics/`, config)
      statisticLoadingData(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="bg-white px-3 py-3 my-2">
      <div className="d-flex justify-content-between">
        <h4>Manage Repots</h4>
        <CButton color="secondary" className="mx-2">
          Filter
        </CButton>
      </div>
      <hr />
      <div
        className="my-3 py-2 px-4"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          border: '1px solid gray',
          borderRadius: 10,
          textAlign: 'center',
        }}
      >
        <div>
          <p>
            <strong>Total Reports</strong>
          </p>
          <CButton color="secondary" onClick={() => setChooseReportType('all')}>
            {statisticData?.total_reports || 0}
          </CButton>
        </div>
        <div>
          <p>
            <strong>Pending Reports</strong>
          </p>
          <CButton color="secondary" onClick={() => setChooseReportType('pending')}>
            {statisticData?.pending_reports || 0}
          </CButton>
        </div>
        <div>
          <p>
            <strong>Safe Reports</strong>
          </p>
          <CButton color="secondary" onClick={() => setChooseReportType('safe')}>
            {statisticData?.safe_reports || 0}
          </CButton>
        </div>
        <div>
          <p>
            <strong>Deleted Reports</strong>
          </p>
          <CButton color="secondary" onClick={() => setChooseReportType('deleted')}>
            {statisticData?.deleted_reports || 0}
          </CButton>
        </div>
        <div>
          <p>
            <strong>Hackers Reports</strong>
          </p>
          <CButton color="secondary" onClick={() => setChooseReportType('hacker')}>
            {statisticData?.hacker_reports || 0}
          </CButton>
        </div>
      </div>

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
      <ChooseReportList chooseReportType={chooseReportType} fetchDataParent={fetchData} />
    </div>
  )
}

export default AllReport
