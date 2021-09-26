import React from 'react'
export const required = (value) => (value || typeof value === 'number' ? undefined : 'Required')
export const maxLength = (max) => (value) =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined
export const maxLength15 = maxLength(15)
export const minLength = (min) => (value) =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined
export const minLength8 = minLength(8)

export const number = (value) => (value && isNaN(Number(value)) ? 'Must be a number' : undefined)
export const minValue = (min) => (value) =>
  value && value < min ? `Must be at least ${min}` : undefined
export const minValue13 = minValue(13)
export const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined
export const tooYoung = (value) =>
  value && value < 13 ? 'You do not meet the minimum age requirement!' : undefined
export const aol = (value) =>
  value && /.+@aol\.com/.test(value) ? 'Really? You still use AOL for your email?' : undefined
export const alphaNumeric = (value) =>
  value && /[^a-zA-Z0-9 ]/i.test(value) ? 'Only alphanumeric characters' : undefined
export const phoneNumber = (value) =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

export const renderField = ({
  placeholders,
  fullWdith = false,
  input,
  label,
  type,
  values,
  meta: { touched, error, warning },
}) => (
  <>
    {values ? (
      <div style={{ minHeight: 78 }}>
        <label>{label}</label>
        <div>
          <input
            {...input}
            type={type}
            style={{ width: fullWdith && '100%' }}
            placeholder={placeholders}
            value={values}
            disabled
          />
          <br />
          {touched &&
            ((error && <span style={{ color: 'red' }}>{error}</span>) ||
              (warning && <span style={{ color: 'red' }}>{warning}</span>))}
        </div>
      </div>
    ) : (
      <div style={{ minHeight: 78 }}>
        <label>{label}</label>
        <div>
          <input
            {...input}
            type={type}
            style={{ width: fullWdith && '100%' }}
            placeholder={placeholders}
            // value={values}
          />
          <br />
          {touched &&
            ((error && <span style={{ color: 'red' }}>{error}</span>) ||
              (warning && <span style={{ color: 'red' }}>{warning}</span>))}
        </div>
      </div>
    )}
  </>
)

export const renderSelect = ({
  placeholders,
  fullWdith = false,
  input,
  label,
  type,
  children,
  meta: { touched, error, warning },
}) => (
  <div style={{ minHeight: 78 }}>
    <label>{label}</label>
    <div>
      <select {...input} type={type} style={{ width: '100%' }} placeholder={placeholders}>
        {children}
      </select>
      <br />
      {touched &&
        ((error && <span style={{ color: 'red' }}>{error}</span>) ||
          (warning && <span style={{ color: 'red' }}>{warning}</span>))}
    </div>
  </div>
)
