import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
import './AccessModal.scss'

// const Otpinput = () => {

//   return (

//   )
// }

const AccessModal = () => {
  const [visible, setVisible] = React.useState(false)
  const [state, setState] = React.useState({
    value: '',
    otp1: '',
    otp2: '',
    otp3: '',
    otp4: '',
    otp5: '',
    disable: true,
  })

  function handleChange(value1, event) {
    setState({ [value1]: event.target.value })
  }

  function handleSubmit(event) {
    const data = new FormData(event.target)
    console.log(state)
    event.preventDefault()
  }

  const inputfocus = (elmnt) => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2
      if (next > -1) {
        elmnt.target.form.elements[next].focus()
      }
    } else {
      console.log('next')

      const next = elmnt.target.tabIndex
      if (next < 5) {
        elmnt.target.form.elements[next].focus()
      }
    }
  }

  return (
    <>
      <CButton color="secondary" className="mr-2" onClick={() => setVisible(!visible)}>
        Admin View
      </CButton>

      <CModal alignment="center" visible={visible}>
        <CModalHeader onDismiss={() => setVisible(false)}>
          <CModalTitle>Admin Access</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <h6 className="my-3">Enter 6 Digit Code for admin Access</h6>
          <form>
            <div className="otpContainer">
              <input
                name="otp1"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={state.otp1}
                // onKeyPress={keyPressed}
                onChange={(e) => handleChange('otp1', e)}
                tabIndex="1"
                maxLength="1"
                onKeyUp={(e) => inputfocus(e)}
              />
              <input
                name="otp2"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={state.otp2}
                onChange={(e) => handleChange('otp2', e)}
                tabIndex="2"
                maxLength="1"
                onKeyUp={(e) => inputfocus(e)}
              />
              <input
                name="otp3"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={state.otp3}
                onChange={(e) => handleChange('otp3', e)}
                tabIndex="3"
                maxLength="1"
                onKeyUp={(e) => inputfocus(e)}
              />
              <input
                name="otp4"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={state.otp4}
                onChange={(e) => handleChange('otp4', e)}
                tabIndex="4"
                maxLength="1"
                onKeyUp={(e) => inputfocus(e)}
              />

              <input
                name="otp5"
                type="text"
                autoComplete="off"
                className="otpInput"
                value={state.otp5}
                onChange={(e) => handleChange('otp5', e)}
                tabIndex="5"
                maxLength="1"
                onKeyUp={(e) => inputfocus(e)}
              />
            </div>
          </form>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>
          <NavLink to="">
            <CButton color="primary" onClick={handleSubmit}>
              Submit
            </CButton>
          </NavLink>
        </CModalFooter>
      </CModal>
    </>
  )
}

export default AccessModal
