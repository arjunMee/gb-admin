import React from 'react'
import { useSelector } from 'react-redux'
import FormComponent from '../component/formComponent'

function Setting() {
  const userProfile = useSelector((state) => state.profile)

  return (
    <div>
      <FormComponent userId={userProfile.admin_user_id} access="user" />
    </div>
  )
}

export default Setting
