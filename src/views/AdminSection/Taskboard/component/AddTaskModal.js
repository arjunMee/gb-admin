import { CButton, CFormLabel, CModal, CModalBody, CModalHeader, CModalTitle } from '@coreui/react'
import React, { useState } from 'react'

const AddTaskModal = () => {
  const [visibleLg, setVisibleLg] = useState(false)

  return (
    <>
      <div>
        <CButton onClick={() => setVisibleLg(!visibleLg)}>Add New</CButton>

        <CModal size="lg" visible={visibleLg}>
          <CModalHeader onDismiss={() => setVisibleLg(false)}>
            <CModalTitle>Add Banner Advertisement</CModalTitle>
          </CModalHeader>
          <CModalBody>
            <div className="my-1">
              <CFormLabel htmlFor="taskName">Task Name</CFormLabel>
              <input
                type="text"
                className="form-control"
                id="taskName"
                // placeholder=""
              />
              <CFormLabel htmlFor="description">Description</CFormLabel>
              <input
                type="text"
                className="form-control"
                id="description"
                // placeholder="Search the user"
              />
              <CFormLabel htmlFor="date">Duo Date</CFormLabel>
              <input
                type="text"
                className="form-control"
                id="date"
                // placeholder="Search the user"
              />
            </div>
            <button style={{ width: '100%' }} className="my-3">
              Submit
            </button>
          </CModalBody>
        </CModal>
      </div>
    </>
  )
}

export default AddTaskModal
