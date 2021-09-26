import React from 'react'
import { shallow } from 'enzyme/build'
import App from './App'
// import Dashboard from './views/dashboard/OldDashboard.js'
// import { render } from 'react-dom'
// import { render, screen } from '@testing-library/react'

it('mounts App without crashing', () => {
  const wrapper = shallow(<App />)
  wrapper.unmount()
})

// it('mounts Dashboard without crashing', () => {
//   const wrapper = shallow(<Dashboard />)
//   wrapper.unmount()
// })

// test('redner learn react link', () => {
//   render(<App />)
//   const linkElemet = screen.getByText(/learn react/i)
//   expect(linkElemet).toBeInTheDocument()
// })
