import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'
import { AppUrl, config } from 'src/config/ApiName'

function ChangeUserPassword({ id }) {
  const [visible, setVisible] = React.useState(false)
  const [password, setPassword] = React.useState('')
  const [rePassword, setRePassword] = React.useState('')
  const [passwordChanged, setPasswordChnaged] = React.useState(true)
  const [error, setError] = React.useState(false)
  const changeHandler = () => {
    if (password === rePassword && password !== '' && rePassword !== '' && password.length > 7) {
      axios
        .post(
          `http://${AppUrl}/api/gb-admin/admin-user/change-password/?admin_id=${id}`,
          {
            password,
          },
          {
            ...config,
          },
        )
        .then((res) => {
          console.log(res.data)
          setPasswordChnaged(false)
        })
        .catch((err) => console.log(err))
    } else {
      setError(true)
    }
  }

  return (
    <>
      <button onClick={() => setVisible(!visible)}>Change Password</button>

      <CModal visible={visible}>
        <CModalHeader>
          <CModalTitle>Enter New Pasword</CModalTitle>
        </CModalHeader>

        <CModalBody>
          <div style={{ maxWidth: '65%', margin: 'auto' }}>
            {passwordChanged ? (
              <>
                <label htmlFor="password">New Password</label>
                <br />
                <input
                  type="text"
                  name="password"
                  id="password"
                  style={{ width: '100%' }}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br />
                <br />
                <label htmlFor="confirmPassword">Re-Enter Password</label>
                <br />
                <input
                  type="text"
                  name="confirmPassword"
                  id="confirmPassword"
                  style={{ width: '100%' }}
                  onChange={(e) => setRePassword(e.target.value)}
                />
                <br />
                {error && <span style={{ color: 'red' }}>Please Enter Same Password</span>}
              </>
            ) : (
              <h4>Password Changed</h4>
            )}
          </div>
        </CModalBody>

        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Close
          </CButton>

          {passwordChanged && (
            <CButton color="primary" onClick={changeHandler}>
              Save Password
            </CButton>
          )}
        </CModalFooter>
      </CModal>
    </>
  )
}

ChangeUserPassword.propTypes = {
  id: PropTypes.number,
}

export default ChangeUserPassword
