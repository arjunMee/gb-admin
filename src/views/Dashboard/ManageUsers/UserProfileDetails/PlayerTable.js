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
import React from 'react'
import { useFetch } from 'src/hooks/useFetch'
import { AppUrl } from 'src/config/ApiName'
import PropTypes from 'prop-types'

PlayerTable.propTypes = {
  id: PropTypes.number,
}

function PlayerTable({ id }) {
  const [activeKey, setActiveKey] = React.useState(1)
  let url = ''

  if (activeKey === 1 && id !== 0) {
    url = `http://${AppUrl}/api/gb-admin/users/statistics/?q=by&id=${id}`
  }
  if (activeKey === 2 && id !== 0) {
    url = `http://${AppUrl}/api/gb-admin/users/statistics/?q=for&id=${id}`
  }

  const [data, isDataLoading] = useFetch(url)

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
            For Avinth Kumar
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
                <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                <CTableHeaderCell scope="col">Counts</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            {data && !isDataLoading && (
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>Story</CTableDataCell>
                  <CTableDataCell>-</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Reaction</CTableDataCell>
                  <CTableDataCell>{data.total_reactions}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Comments</CTableDataCell>
                  <CTableDataCell>{data.total_comments}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Images</CTableDataCell>
                  <CTableDataCell>{data.total_images}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Videos</CTableDataCell>
                  <CTableDataCell>{data.total_videos}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Messages</CTableDataCell>
                  <CTableDataCell>{data.total_messages}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Articles</CTableDataCell>
                  <CTableDataCell>-</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Tournament Participated</CTableDataCell>
                  <CTableDataCell>-</CTableDataCell>
                </CTableRow>
              </CTableBody>
            )}
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
                <CTableHeaderCell scope="col">Type</CTableHeaderCell>
                <CTableHeaderCell scope="col">Counts</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            {data && !isDataLoading && (
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>Story</CTableDataCell>
                  <CTableDataCell>-</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Reaction</CTableDataCell>
                  <CTableDataCell>{data.total_reactions}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Comments</CTableDataCell>
                  <CTableDataCell>{data.total_comments}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Images</CTableDataCell>
                  <CTableDataCell>{data.total_images}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Videos</CTableDataCell>
                  <CTableDataCell>{data.total_videos}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Messages</CTableDataCell>
                  <CTableDataCell>{data.total_messages}</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Articles</CTableDataCell>
                  <CTableDataCell>-</CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableDataCell>Tournament Participated</CTableDataCell>
                  <CTableDataCell>-</CTableDataCell>
                </CTableRow>
              </CTableBody>
            )}
          </CTable>
        </CTabPane>
      </CTabContent>
    </div>
  )
}

export default PlayerTable
