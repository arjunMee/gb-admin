import React from 'react'
import { CCard, CCardBody, CCardText, CCardTitle, CRow, CCol } from '@coreui/react'

const WidgetStatGroup = () => {
  return (
    <CRow>
      {[
        { color: 'info', textColor: 'white', label: 'Online Users', value: '103' },
        { color: 'dark', textColor: 'white', label: 'Users', value: '230' },
        { color: 'warning', textColor: 'white', label: 'Reactions', value: '323' },
        { color: 'danger', textColor: 'white', label: 'Comments', value: '870' },
      ].map((item, index) => (
        <CCol sm="6" lg="3" key={index}>
          <CCard
            color={item.color}
            textColor={item.textColor}
            className="mb-3"
            style={{ maxWidth: '18rem' }}
          >
            <CCardBody>
              <CCardTitle>{item.value}</CCardTitle>
              <CCardText>{item.label}</CCardText>
            </CCardBody>
          </CCard>
        </CCol>
      ))}
    </CRow>
  )
}

export default WidgetStatGroup
