import { CFormLabel, CFormSelect } from '@coreui/react'
import axios from 'axios'
import React from 'react'
import { AppUrl, config } from 'src/config/ApiName'
import { NavLink } from 'react-router-dom'
import {
  renderField,
  required,
  minLength8,
  minLength2,
  alphaNumeric,
  email,
  aol,
  phoneNumber,
  renderSelect,
} from 'src/appRedux/reduxFormValidation'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

const onSubmit = (values, dispatch) => {
  alert(JSON.stringify(values))
  // dispatch();
  // const userProfile = useSelector((state) => state.profile.profileObject)

  axios
    .post(
      `http://${AppUrl}/api/gb-admin/admin-user/`,
      {
        username: values.username,
        first_name: values.firstName,
        last_name: values.lastName,
        email: values.userEmail,
        contact_number: values.userPhoneNumber,
        password: values.password,
        access: values.userAccess,
        duration_start_date: values.joinDate,
        duration_end_date: null,
      },
      {
        ...config,
      },
    )
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => console.log(err))
}

function AddUser(props) {
  const { handleSubmit, pristine, reset, submitting } = props

  return (
    <div>
      <div className="bg-white p-3">
        <h5>Add New User</h5>
        <hr />
        <NavLink to="/generalAdmin/Setting">
          <button className="mx-2">Profile</button>
        </NavLink>
      </div>
      <form>
        <div className="bg-white my-3 p-3">
          <Field
            name="firstName"
            type="text"
            component={renderField}
            label="First name"
            validate={[required]}
            fullWdith
          />
          <Field
            name="lastName"
            type="text"
            component={renderField}
            label="Last Name"
            validate={[required]}
            fullWdith
          />
          <Field
            name="userEmail"
            type="email"
            component={renderField}
            label="Email"
            validate={email}
            warn={aol}
            fullWdith
          />
          <Field
            name="userPhoneNumber"
            type="number"
            component={renderField}
            validate={[required, phoneNumber]}
            label="Phone Number"
            fullWdith
          />
          <Field
            name="username"
            type="text"
            component={renderField}
            label="User Name"
            validate={[required]}
            fullWdith
          />

          <Field
            name="password"
            type="text"
            component={renderField}
            label="Password"
            validate={[required, minLength8]}
            fullWdith
          />

          <Field name="userAccess" type="select" component={renderSelect}>
            <option>Select User Access</option>
            <option value="admin">Admin</option>
            <option value="view">View</option>
          </Field>
          <Field name="joinDate" type="date" component={renderField} label="Joining Date" />
          <br />
          <div className="d-flex">
            <button
              type="submit"
              disabled={submitting}
              onClick={handleSubmit}
              style={{ width: '100%' }}
            >
              Save
            </button>
            <button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
              style={{ width: '100%' }}
            >
              Clear Values
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

AddUser.propTypes = {
  props: PropTypes.object,
  handleSubmit: PropTypes.object,
  pristine: PropTypes.object,
  reset: PropTypes.object,
  submitting: PropTypes.object,
}

export default reduxForm({
  form: 'AddNewUser',
  onSubmit,
})(AddUser)
