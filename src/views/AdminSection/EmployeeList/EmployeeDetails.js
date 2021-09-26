import React from 'react'
import FormComponent from '../component/formComponent'
import { useParams } from 'react-router'
import { useSelector } from 'react-redux'

function EmployeeChanges() {
  const { employeeId } = useParams()
  const userProfile = useSelector((state) => state.profile)

  return (
    <div>
      <FormComponent userId={employeeId} access={userProfile.access} />
    </div>
  )
}

export default EmployeeChanges
