import React, { lazy } from 'react'
import ReviewEvents from './component/ReviewEvents'
import PaymentPending from './component/PaymentPending'
import Support from './component/Support'
import { CCol, CContainer, CRow } from '@coreui/react'
import BookedTickets from './component/BookedTickets'
const Graphy = lazy(() => import('./component/TournmanetGraph'))
const WidgetsBrand = lazy(() => import('../../components/widgets/WidgetStatGroup.js'))

const Dashboard = () => {
  return (
    <>
      <WidgetsBrand />
      <CContainer className="p-0">
        <Graphy />
      </CContainer>
      <CContainer className="p-0">
        <CRow xs={{ gutterX: 2 }}>
          <CCol>
            <ReviewEvents />
          </CCol>

          <CCol>
            <PaymentPending />
          </CCol>

          <CCol>
            <Support />
          </CCol>
        </CRow>
      </CContainer>
      <BookedTickets />
    </>
  )
}

export default Dashboard
