import { CCol, CContainer, CRow } from '@coreui/react'
import React, { lazy } from 'react'

import Graphy from 'src/views/Tournament/Home/component/TournmanetGraph'

import GbTournament from './component/GbTournament'
import Activity from './component/Activity'
import Tasks from './component/Tasks'
import AdminTable from './component/AdminTable'

const WidgetsBrand = lazy(() => import('../../../views/components/widgets/WidgetStatGroup.js'))
function index() {
  return (
    <div>
      <WidgetsBrand />
      <CContainer className="p-0">
        <Graphy />
      </CContainer>
      <CContainer className="p-0">
        <CRow xs={{ gutterX: 2 }}>
          <CCol>
            <GbTournament />
          </CCol>

          <CCol>
            <Activity />
          </CCol>

          <CCol>
            <Tasks />
          </CCol>
        </CRow>
      </CContainer>
      <AdminTable />
    </div>
  )
}

export default index
