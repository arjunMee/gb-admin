import React from 'react'
import { render, screen } from '@testing-library/react'
import { shallow } from 'enzyme/build'
import { BrowserRouter } from 'react-router-dom'
import Index from '../index'

import { Provider } from 'react-redux'
import userEvent from '@testing-library/user-event'

import store from 'src/store'

// test('redner learn react link', async () => {
//   render(
//     <Provider store={store}>
//       <Index />
//     </Provider>,
//   )

//   const button = await screen.findByRole('button')
//   expect(button).toBeInTheDocument()
// })

// it('mounts App without crashing', () => {
//   const wrapper = shallow(<Index />)
//   wrapper.unmount()
// })

test('redner Learn React Link', () => {
  const div = document.createElement('div')
  document.body.append(div)

  render(
    <Provider store={store}>
      <Index />
    </Provider>,
    div,
  )
})
