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
} from '@coreui/react'

function Trading() {
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
            User
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 2}
            onClick={() => setActiveKey(2)}
          >
            Post
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 3}
            onClick={() => setActiveKey(3)}
          >
            Article
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink
            href="javascript:void(0);"
            active={activeKey === 4}
            onClick={() => setActiveKey(4)}
          >
            Tournament
          </CNavLink>
        </CNavItem>
      </CNav>
      <CTabContent>
        <CTabPane
          style={{ height: 286, overflowY: 'scroll' }}
          role="tabpanel"
          aria-labelledby="user-tab"
          visible={activeKey === 1}
        >
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Followers</CTableHeaderCell>
                <CTableHeaderCell scope="col">Avg Post Likes</CTableHeaderCell>
                <CTableHeaderCell scope="col">Avg Comments</CTableHeaderCell>
                <CTableHeaderCell scope="col">Engagement Rate</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {new Array(8).fill(1).map((_, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>demo 1</CTableDataCell>
                    <CTableDataCell>demo 1</CTableDataCell>
                    <CTableDataCell>demo 1</CTableDataCell>
                    <CTableDataCell>demo 1</CTableDataCell>
                    <CTableDataCell>demo 1</CTableDataCell>
                  </CTableRow>
                )
              })}
            </CTableBody>
          </CTable>
        </CTabPane>
        <CTabPane
          style={{ height: 286, overflowY: 'scroll' }}
          role="tabpanel"
          aria-labelledby="post-tab"
          visible={activeKey === 2}
        >
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Post ( Thumbnail ) </CTableHeaderCell>
                <CTableHeaderCell scope="col">User</CTableHeaderCell>
                <CTableHeaderCell scope="col">Views</CTableHeaderCell>
                <CTableHeaderCell scope="col">Reactions</CTableHeaderCell>
                <CTableHeaderCell scope="col">Comments</CTableHeaderCell>
                <CTableHeaderCell scope="col">Engagement Rate</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {new Array(8).fill(1).map((_, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>demo 2</CTableDataCell>
                    <CTableDataCell>demo 2</CTableDataCell>
                    <CTableDataCell>demo 2</CTableDataCell>
                    <CTableDataCell>demo 2</CTableDataCell>
                    <CTableDataCell>demo 2</CTableDataCell>
                    <CTableDataCell>demo 2</CTableDataCell>
                  </CTableRow>
                )
              })}
            </CTableBody>
          </CTable>
        </CTabPane>
        <CTabPane
          style={{ height: 286, overflowY: 'scroll' }}
          role="tabpanel"
          aria-labelledby="article-tab"
          visible={activeKey === 3}
        >
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Post ( Thumbnail + Title ) </CTableHeaderCell>
                <CTableHeaderCell scope="col">User</CTableHeaderCell>
                <CTableHeaderCell scope="col">Views</CTableHeaderCell>
                <CTableHeaderCell scope="col">Reactions</CTableHeaderCell>
                <CTableHeaderCell scope="col">Comments</CTableHeaderCell>
                <CTableHeaderCell scope="col">Engagement Rate</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {new Array(8).fill(1).map((_, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>demo 3</CTableDataCell>
                    <CTableDataCell>demo 3</CTableDataCell>
                    <CTableDataCell>demo 3</CTableDataCell>
                    <CTableDataCell>demo 3</CTableDataCell>
                    <CTableDataCell>demo 3</CTableDataCell>
                    <CTableDataCell>demo 3</CTableDataCell>
                  </CTableRow>
                )
              })}
            </CTableBody>
          </CTable>
        </CTabPane>
        <CTabPane
          style={{ height: 286, overflowY: 'scroll' }}
          role="tabpanel"
          aria-labelledby="tournament-tab"
          visible={activeKey === 4}
        >
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tournament Name </CTableHeaderCell>
                <CTableHeaderCell scope="col">Organizer</CTableHeaderCell>
                <CTableHeaderCell scope="col">Game</CTableHeaderCell>
                <CTableHeaderCell scope="col">Views</CTableHeaderCell>
                <CTableHeaderCell scope="col">Tickets</CTableHeaderCell>
                <CTableHeaderCell scope="col">Engagement Rate</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {new Array(8).fill(1).map((_, index) => {
                return (
                  <CTableRow key={index}>
                    <CTableHeaderCell scope="row">{index + 1}</CTableHeaderCell>
                    <CTableDataCell>demo 4</CTableDataCell>
                    <CTableDataCell>demo 4</CTableDataCell>
                    <CTableDataCell>demo 4</CTableDataCell>
                    <CTableDataCell>demo 4</CTableDataCell>
                    <CTableDataCell>demo 4</CTableDataCell>
                    <CTableDataCell>demo 4</CTableDataCell>
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

export default Trading
