import React from 'react'
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
  CTableHeaderCell,
  CTableDataCell,
  CTableRow,
  CTableHead,
  CTable,
  CTableBody,
  CFormSelect,
  CButton,
} from '@coreui/react'
import '../../index.scss'
function Statistics() {
  const [activeKey, setActiveKey] = React.useState(1)
  return (
    <div className="bg-white px-3 py-3 my-3">
      <h4>Statistics</h4>
      <hr />
      <div style={{ display: 'flex' }}>
        <CFormSelect aria-label="Default select example">
          <option>Open this select date range</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </CFormSelect>
        <CButton color="secondary" className="mx-2">
          View
        </CButton>
      </div>
      <hr />
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            User
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            Message
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 3}
            onClick={() => setActiveKey(3)}
          >
            Comments
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 4}
            onClick={() => setActiveKey(4)}
          >
            Likes
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 5}
            onClick={() => setActiveKey(5)}
          >
            Shares
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 6}
            onClick={() => setActiveKey(6)}
          >
            Pages
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 7}
            onClick={() => setActiveKey(7)}
          >
            Groups
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 8}
            onClick={() => setActiveKey(8)}
          >
            Reports
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="user-tab" visible={activeKey === 1}>
          <div className="tableDiv">
            <CTable striped className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Change ( in percentage )</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Users</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="message-tab" visible={activeKey === 2}>
          <div className="tableDiv">
            <CTable striped className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Change ( in percentage )</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Users</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="commments-tab" visible={activeKey === 3}>
          <div className="tableDiv">
            <CTable striped className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Change ( in percentage )</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Users</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="likes-tab" visible={activeKey === 4}>
          <div className="tableDiv">
            <CTable striped className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Change ( in percentage )</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Users</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </CTabPane>

        <CTabPane role="tabpanel" aria-labelledby="share-tab" visible={activeKey === 5}>
          <div className="tableDiv">
            <CTable striped className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Change ( in percentage )</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Users</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="Pages-tab" visible={activeKey === 6}>
          <div className="tableDiv">
            <CTable striped className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Change ( in percentage )</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Users</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="Groups-tab" visible={activeKey === 7}>
          <div className="tableDiv">
            <CTable striped className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Change ( in percentage )</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Users</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="Reports-tab" visible={activeKey === 8}>
          <div className="tableDiv">
            <CTable striped className="table">
              <CTableHead className="table-length">
                <CTableRow>
                  <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Change ( in percentage )</CTableHeaderCell>
                  <CTableHeaderCell scope="col">Users</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {new Array(8).fill(1).map((_, index) => {
                  return (
                    <CTableRow key={index}>
                      <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                      <CTableDataCell>demo {index}</CTableDataCell>
                    </CTableRow>
                  )
                })}
              </CTableBody>
            </CTable>
          </div>
        </CTabPane>
      </CTabContent>
    </div>
  )
}

export default Statistics
