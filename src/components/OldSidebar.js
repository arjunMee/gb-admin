import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import {
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarToggler,
  CCreateNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'
import Gblogo from '../assets/gblogo.png'
// sidebar nav config
import navigation from '../_nav'

const OldSidebar = () => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)

  return (
    <CSidebar
      position="fixed"
      selfHiding="md"
      unfoldable={unfoldable}
      show={sidebarShow}
      onShow={() => console.log('show')}
      onHide={() => {
        dispatch({ type: 'set', sidebarShow: false })
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        <img
          className="sidebar-brand-full"
          src={Gblogo}
          style={{
            width: 60,
            height: 50,
            objectFit: 'contain',
          }}
        />
        <img
          className="sidebar-brand-narrow"
          src={Gblogo}
          style={{
            width: 55,
            height: 50,
            objectFit: 'contain',
          }}
        />
        <h6
          className="sidebar-brand-full"
          style={{
            marginTop: 8,
          }}
        >
          Admin
        </h6>
        <h6
          className="sidebar-brand-narrow"
          style={{
            marginTop: 10,
            display: 'none',
          }}
        >
          Admin
        </h6>
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <CCreateNavItem items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  )
}

export default React.memo(OldSidebar)
