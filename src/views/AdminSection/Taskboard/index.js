import {
  CCard,
  CCardBody,
  CCardHeader,
  CCardText,
  CCardTitle,
  CCol,
  CContainer,
  CRow,
} from '@coreui/react'
import React from 'react'
import AddTaskModal from './component/AddTaskModal'

function index() {
  return (
    <div>
      <div className="d-flex justify-content-between">
        <p>Taskboard</p>
        <AddTaskModal />
      </div>

      <CContainer className="p-0 my-2">
        <CRow xs={{ gutterX: 2 }}>
          <CCol>
            <p>Backlog</p>
            <div style={{ overflowY: 'scroll', maxHeight: 550 }}>
              {new Array(5).fill(1).map((_, index) => {
                return (
                  <div key={index}>
                    <div>
                      <CCard
                        color="white"
                        textColor="gray"
                        className="mb-3"
                        style={{ maxWidth: '18rem' }}
                        key={index}
                      >
                        <CCardHeader>Header</CCardHeader>
                        <CCardBody>
                          <CCardTitle> card title</CCardTitle>
                          <CCardText>
                            {`Some quick example text to build on the card title and make up the bulk of the
                card's content.`}
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    </div>
                  </div>
                )
              })}
            </div>
          </CCol>

          <CCol>
            <p>Todo</p>
            <div style={{ overflowY: 'scroll', maxHeight: 550 }}>
              {new Array(5).fill(1).map((_, index) => {
                return (
                  <div key={index}>
                    <div>
                      <CCard
                        color="white"
                        textColor="gray"
                        className="mb-3"
                        style={{ maxWidth: '18rem' }}
                        key={index}
                      >
                        <CCardHeader>Header</CCardHeader>
                        <CCardBody>
                          <CCardTitle> card title</CCardTitle>
                          <CCardText>
                            {`Some quick example text to build on the card title and make up the bulk of the
                card's content.`}
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    </div>
                  </div>
                )
              })}
            </div>
          </CCol>

          <CCol>
            <p>In Process</p>
            <div style={{ overflowY: 'scroll', maxHeight: 550 }}>
              {new Array(5).fill(1).map((_, index) => {
                return (
                  <div key={index}>
                    <div>
                      <CCard
                        color="white"
                        textColor="gray"
                        className="mb-3"
                        style={{ maxWidth: '18rem' }}
                        key={index}
                      >
                        <CCardHeader>Header</CCardHeader>
                        <CCardBody>
                          <CCardTitle> card title</CCardTitle>
                          <CCardText>
                            {`Some quick example text to build on the card title and make up the bulk of the
                card's content.`}
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    </div>
                  </div>
                )
              })}
            </div>
          </CCol>
          <CCol>
            <p>Currently in Process</p>
            <div style={{ overflowY: 'scroll', maxHeight: 550 }}>
              {new Array(5).fill(1).map((_, index) => {
                return (
                  <div key={index}>
                    <div>
                      <CCard
                        color="white"
                        textColor="gray"
                        className="mb-3"
                        style={{ maxWidth: '18rem' }}
                        key={index}
                      >
                        <CCardHeader>Header</CCardHeader>
                        <CCardBody>
                          <CCardTitle> card title</CCardTitle>
                          <CCardText>
                            {`Some quick example text to build on the card title and make up the bulk of the
                card's content.`}
                          </CCardText>
                        </CCardBody>
                      </CCard>
                    </div>
                  </div>
                )
              })}
            </div>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default index
