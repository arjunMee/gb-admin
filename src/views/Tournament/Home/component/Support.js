import { CButton } from '@coreui/react'
import React from 'react'

function Support() {
  return (
    <div className="bg-white px-3 py-3 my-2" style={{ minHeight: 200 }}>
      <div className="d-flex justify-content-between">
        <h6>Support</h6>
        <CButton color="secondary" className="mx-2">
          Show All
        </CButton>
      </div>
      <hr />
    </div>
  )
}

export default Support
