import React from 'react'
import {
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CNav,
  CNavItem,
  CNavLink,
  CTabPane,
  CTabContent,
} from '@coreui/react'

function ReportTable() {
  const [activeKey, setActiveKey] = React.useState(1)

  return (
    <div className="bg-white px-3 py-3 my-3">
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 1}
            onClick={() => setActiveKey(1)}
          >
            By Avinth Kumar
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            On Avinth Kumar
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane
          style={{ border: '1px solid gray' }}
          role="tabpanel"
          aria-labelledby="user-tab"
          visible={activeKey === 1}
        >
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Post</CTableHeaderCell>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">By</CTableHeaderCell>
                <CTableHeaderCell scope="col">Report Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {new Array(5).fill(1).map((_, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableDataCell>-</CTableDataCell>
                    <CTableDataCell>-</CTableDataCell>
                    <CTableDataCell>-</CTableDataCell>
                    <CTableDataCell>-</CTableDataCell>
                    <CTableDataCell>-</CTableDataCell>
                  </CTableRow>
                )
              })}
            </CTableBody>
          </CTable>
        </CTabPane>
        <CTabPane
          style={{ border: '1px solid gray' }}
          role="tabpanel"
          aria-labelledby="post-tab"
          visible={activeKey === 2}
        >
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">S.No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Post</CTableHeaderCell>
                <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                <CTableHeaderCell scope="col">By</CTableHeaderCell>
                <CTableHeaderCell scope="col">Report Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {new Array(5).fill(1).map((_, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableDataCell>-</CTableDataCell>
                    <CTableDataCell>-</CTableDataCell>
                    <CTableDataCell>-</CTableDataCell>
                    <CTableDataCell>-</CTableDataCell>
                    <CTableDataCell>-</CTableDataCell>
                  </CTableRow>
                )
              })}
            </CTableBody>
          </CTable>
        </CTabPane>
      </CTabContent>
    </div>
  )
}

export default ReportTable
