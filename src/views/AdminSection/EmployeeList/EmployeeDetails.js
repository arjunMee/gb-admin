import React from 'react'

import { CTable, CTableBody, CTableDataCell, CTableRow } from '@coreui/react'

import { useParams } from 'react-router'
import { useSelector } from 'react-redux'
import { AppUrl, config } from 'src/config/ApiName'
import { Field, reduxForm } from 'redux-form'
import { renderField, required, email, aol } from 'src/appRedux/reduxFormValidation'
import axios from 'axios'
import PropTypes from 'prop-types'

let admin_id

function EmployeeChanges(props) {
  const { employeeId } = useParams()
  const profile = useSelector((state) => state.profile)
  const [data, setData] = React.useState(null)
  const [edit, setEdit] = React.useState(false)

  const { handleSubmit, pristine, reset, submitting } = props
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://${AppUrl}/api/gb-admin/admin-user/?q=admin_user&admin_id=${employeeId}`,
        config,
      )
      setData(data)
    } catch (error) {
      console.log('error', error)
    }
  }

  React.useEffect(() => {
    if (edit === false) fetchData()
  }, [edit])

  React.useEffect(() => {
    admin_id = employeeId
  }, [employeeId])

  return (
    <div>
      <div className="bg-white p-3">
        <h5>Settings</h5>
        <hr />
        <button
          className="mx-2"
          onClick={() => {
            setEdit(false)
          }}
        >
          Profile
        </button>
      </div>
      <div className="bg-white my-3 p-3">
        <form>
          <div className="my-2">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5>Details</h5>
              {profile.access === 'admin' &&
                (!edit ? (
                  <button
                    onClick={() => {
                      setEdit(!edit)
                    }}
                  >
                    Edit
                  </button>
                ) : (
                  <div>
                    <button
                      type="submit"
                      disabled={submitting}
                      onClick={() => {
                        handleSubmit()
                        setEdit(!edit)
                      }}
                    >
                      Save
                    </button>
                    <button type="button" disabled={pristine || submitting} onClick={reset}>
                      Clear Values
                    </button>
                  </div>
                ))}
            </div>

            {!edit ? (
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      <p>
                        <strong>Full Name :</strong> {data?.user.first_name || ''}{' '}
                        {data?.user.last_name || ''}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p>
                        <strong>Account :</strong> {data?.user.email || ''}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <p>
                        <strong>City :</strong> {data?.city || 'demo city'}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p>
                        <strong>Country :</strong> {data?.country || 'demo country'}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <p>
                        <strong> Birthdate :</strong> {data?.birthday || 'demo birthdate'}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            ) : (
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      <Field
                        name="firstName"
                        type="text"
                        component={renderField}
                        label="First name"
                        values={data?.user.first_name}
                      />
                      <Field
                        name="lastName"
                        type="text"
                        component={renderField}
                        label="Last Name"
                        values={data?.user.last_name}
                      />
                    </CTableDataCell>
                    <CTableDataCell>
                      <Field
                        name="gbEmail"
                        type="email"
                        component={renderField}
                        label="GB Account"
                        validate={email}
                        warn={aol}
                        values={data?.user.email}
                      />
                      <Field
                        name="birthdate"
                        type="date"
                        component={renderField}
                        label="Birth Date"
                      />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <Field name="cityName" type="text" component={renderField} label="City" />
                    </CTableDataCell>
                    <CTableDataCell>
                      <Field
                        name="countryName"
                        type="text"
                        component={renderField}
                        label="Country"
                      />
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            )}
          </div>
          <hr />
          <div className="my-2">
            <h5>Company</h5>
            {!edit ? (
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      <p>
                        <strong>Position :</strong> {data?.position || 'demo position'}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p>
                        <strong>Responsibilities :</strong>{' '}
                        {data?.reponsibilities || 'demo reponsibilities'}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <p>
                        <strong>Department :</strong> {data?.department || 'demo department'}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p>
                        <strong>Reporting Manager :</strong>{' '}
                        {data?.reporting_manager || 'demo supervisor'}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <p style={{ maxWidth: 350, wordWrap: 'break-word' }}>
                      <strong>Skils :</strong> {data?.skills || 'demo skills'}
                    </p>
                  </CTableRow>
                </CTableBody>
              </CTable>
            ) : (
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      <Field
                        name="position"
                        type="text"
                        component={renderField}
                        label="Position"
                        validate={[required]}
                      />
                    </CTableDataCell>
                    <CTableDataCell>
                      <Field
                        name="responsibilities"
                        type="text"
                        component={renderField}
                        label="Responsibilities"
                        validate={[required]}
                      />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <Field
                        name="department"
                        type="text"
                        component={renderField}
                        label="Department"
                        validate={[required]}
                      />
                    </CTableDataCell>
                    <CTableDataCell>
                      <Field
                        name="reportingManager"
                        type="text"
                        component={renderField}
                        label="Reporting Manager"
                        validate={[required]}
                      />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <Field
                      name="skills"
                      type="text"
                      component={renderField}
                      label="Skills"
                      validate={[required]}
                      fullWdith={true}
                    />
                  </CTableRow>
                </CTableBody>
              </CTable>
            )}
          </div>
          <hr />
          <div className="my-2">
            <h4>
              <u>Contacts</u>
            </h4>
            {!edit ? (
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      <p>
                        <strong>Email :</strong> {data?.city || 'demo city'}
                      </p>
                    </CTableDataCell>
                    <CTableDataCell>
                      <p>
                        <strong>Phone Number :</strong>
                        {data?.contact_number || 'demo contact_number'}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <p>
                        <strong>Github :</strong> {data?.github || 'demo github'}
                      </p>
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            ) : (
              <CTable borderless>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      <Field
                        name="githubLink"
                        type="text"
                        component={renderField}
                        label="Github"
                        fullWdith={true}
                      />
                    </CTableDataCell>
                    <CTableDataCell>
                      <Field
                        name="userEmail"
                        type="email"
                        component={renderField}
                        label="Email"
                        validate={email}
                        warn={aol}
                      />
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      <Field
                        name="userPhoneNumber"
                        type="number"
                        component={renderField}
                        // validate={[required, phoneNumber]}
                        label="Phone Number"
                        values={data?.contact_number}
                      />
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            )}
          </div>
        </form>
      </div>
    </div>
  )
}

const onSubmit = (values, dispatch) => {
  alert(JSON.stringify('successfull saved'))
  axios
    .put(
      `http://${AppUrl}/api/gb-admin/admin-user/?admin_id=${admin_id}`,
      {
        country: values.countryName,
        city: values.cityName,
        birthday: values.birthdate,
        position: values.position,
        reponsibilities: values.responsibilities,
        department: values.department,
        skills: values.skills,
        github: values.githubLink,
        reporting_manager: values.reportingManager,
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

EmployeeChanges.propTypes = {
  props: PropTypes.object,
  handleSubmit: PropTypes.object,
  pristine: PropTypes.object,
  reset: PropTypes.object,
  submitting: PropTypes.object,
}

export default reduxForm({
  form: 'employeeProfile',
  onSubmit,
})(EmployeeChanges)
