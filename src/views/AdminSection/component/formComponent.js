import React from 'react'
import { useSelector } from 'react-redux'
import { CCol, CContainer, CRow } from '@coreui/react'
import PropTypes from 'prop-types'
import { AppUrl, config } from 'src/config/ApiName'
import { Field, reduxForm } from 'redux-form'
import { renderField, required, email, aol, phoneNumber } from 'src/appRedux/reduxFormValidation'
import axios from 'axios'
import ChangeUserPassword from './ChangeUserPassword'

let admin_id

function FormComponent(props) {
  const [data, setData] = React.useState(null)
  const [edit, setEdit] = React.useState(false)
  const { handleSubmit, pristine, reset, submitting, userId, access } = props
  const fetchData = async () => {
    try {
      const { data } = await axios.get(
        `http://${AppUrl}/api/gb-admin/admin-user/?q=admin_user&admin_id=${userId}`,
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
    admin_id = userId
  }, [userId])

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
        {(access === 'user' || access === 'admin') && <ChangeUserPassword id={userId} />}
      </div>
      <div className="bg-white my-3 p-3">
        <form>
          <div className="my-2">
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <h5>Details</h5>
              {(access === 'user' || access === 'admin') &&
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
              <CContainer>
                <CRow>
                  <CCol>
                    <strong>Full Name :</strong>{' '}
                    <p>
                      {data?.user.first_name || ''} {data?.user.last_name || ''}
                    </p>
                  </CCol>
                  <CCol>
                    <strong>Account :</strong> <p> {data?.user.email || ''}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <strong>City :</strong> <p>{data?.city || 'demo city'}</p>
                  </CCol>
                  <CCol>
                    <strong>Country :</strong> <p>{data?.country || 'demo country'}</p>
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <strong> Birthdate :</strong> <p> {data?.birthday || 'demo birthdate'}</p>
                  </CCol>
                </CRow>
              </CContainer>
            ) : (
              <CContainer>
                <CRow>
                  <CCol>
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
                  </CCol>
                  <CCol>
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
                  </CCol>
                </CRow>
                <CRow>
                  <CCol>
                    <Field name="cityName" type="text" component={renderField} label="City" />
                  </CCol>
                  <CCol>
                    <Field name="countryName" type="text" component={renderField} label="Country" />
                  </CCol>
                </CRow>
              </CContainer>
            )}
          </div>
          <hr />
          <div className="my-2">
            <h5>Company</h5>
            {!edit ? (
              <CContainer>
                <>
                  <CRow>
                    <CRow>
                      <strong>Position :</strong> <p> {data?.position || 'demo position'}</p>
                    </CRow>
                    <CCol>
                      <strong>Responsibilities :</strong>{' '}
                      <p>{data?.reponsibilities || 'demo reponsibilities'}</p>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <strong>Department :</strong> <p> {data?.department || 'demo department'}</p>
                    </CCol>
                    <CCol>
                      <strong>Reporting Manager :</strong>{' '}
                      <p>{data?.reporting_manager || 'demo supervisor'}</p>
                    </CCol>
                  </CRow>
                  <CRow>
                    <strong>Skils :</strong> <p> {data?.skills || 'demo skills'}</p>
                  </CRow>
                </>
              </CContainer>
            ) : (
              <CContainer>
                <>
                  <CRow>
                    <CCol>
                      <Field
                        name="position"
                        type="text"
                        component={renderField}
                        label="Position"
                        // validate={[required]}
                      />
                    </CCol>
                    <CCol>
                      <Field
                        name="responsibilities"
                        type="text"
                        component={renderField}
                        label="Responsibilities"
                        // validate={[required]}
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <Field
                        name="department"
                        type="text"
                        component={renderField}
                        label="Department"
                        // validate={[required]}
                      />
                    </CCol>
                    <CCol>
                      <Field
                        name="reportingManager"
                        type="text"
                        component={renderField}
                        label="Reporting Manager"
                        // validate={[required]}
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <Field
                      name="skills"
                      type="text"
                      component={renderField}
                      label="Skills"
                      // validate={[required]}
                      fullWdith={true}
                    />
                  </CRow>
                </>
              </CContainer>
            )}
          </div>
          <hr />
          <div className="my-2">
            <h5>Contacts</h5>
            {!edit ? (
              <CContainer>
                <>
                  <CRow>
                    <CCol>
                      <strong>Email :</strong> <p> {data?.city || 'demo city'}</p>
                    </CCol>
                    <CCol>
                      <strong>Phone Number :</strong>{' '}
                      <p>{data?.contact_number || 'demo contact_number'}</p>
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <strong>Github :</strong> <p> {data?.github || 'demo github'}</p>
                    </CCol>
                  </CRow>
                </>
              </CContainer>
            ) : (
              <CContainer>
                <>
                  <CRow>
                    <CCol>
                      <Field
                        name="githubLink"
                        type="text"
                        component={renderField}
                        label="Github"
                        fullWdith={true}
                      />
                    </CCol>
                    <CCol>
                      <Field
                        name="userEmail"
                        type="email"
                        component={renderField}
                        label="Email"
                        validate={email}
                        warn={aol}
                      />
                    </CCol>
                  </CRow>
                  <CRow>
                    <CCol>
                      <Field
                        name="userPhoneNumber"
                        type="number"
                        component={renderField}
                        validate={[phoneNumber]}
                        label="Phone Number"
                        values={data?.contact_number}
                      />
                    </CCol>
                  </CRow>
                </>
              </CContainer>
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

FormComponent.propTypes = {
  props: PropTypes.any,
  handleSubmit: PropTypes.any,
  pristine: PropTypes.any,
  reset: PropTypes.any,
  submitting: PropTypes.any,
  userId: PropTypes.any,
  access: PropTypes.any,
}

export default reduxForm({
  form: 'employeeProfile',
  onSubmit,
})(FormComponent)
