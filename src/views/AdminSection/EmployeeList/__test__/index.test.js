import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme/build'

import Index from '../index'
import Employee from '../EmployeeDetails'
import { Provider } from 'react-redux'

import store from 'src/store'
// test('redner learn react link', () => {
//   render(<Index />)
//   const linkElemet = screen.getByText(/learn react/i)
//   expect(linkElemet).toBeInTheDocument()
// })

it('mounts App without crashing', () => {
  const wrapper = shallow(
    <Provider store={store}>
      <Index />
    </Provider>,
  )
  wrapper.unmount()
})
it('employee mounts App without crashing', () => {
  const wrapper = shallow(<Employee />)
  wrapper.unmount()
})
