import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme/build'
import { BrowserRouter } from 'react-router-dom'
import Index from '../index'
import Employee from '../EmployeeDetails'
import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'

// import store from 'src/store'
// const dashboardState = {
//   sidebarShow: false,
//   authenticated: true,
// }

// test('redner learn react link', async () => {
//   render(
//     <Provider store={store}>
//       <BrowserRouter>
//         <Index />
//       </BrowserRouter>
//     </Provider>,
//   )

//   expect(await screen.debug())
// })

// it('mounts App without crashing', () => {
//   const wrapper = shallow(
//     <Provider store={store}>
//       <Index />
//     </Provider>,
//   )
//   wrapper.unmount()
// })

it('employee mounts App without crashing', () => {
  const wrapper = shallow(<Employee />)
  wrapper.unmount()
})
