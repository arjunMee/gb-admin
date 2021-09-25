import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/generalAdmin/home',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Taskboard',
    to: '/generalAdmin/taskboard',
    icon: <CIcon name="cil-graph" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Settings',
    to: '/generalAdmin/Setting',
    icon: <CIcon name="cil-graph" customClassName="nav-icon" />,
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Employee List',
    to: '/generalAdmin/employee-list',
    icon: <CIcon name="cil-graph" customClassName="nav-icon" />,
  },
  // {
  //   _component: 'CNavItem',
  //   as: NavLink,
  //   anchor: 'Employee List',
  //   to: '/generalAdmin/employee-list/:employeeId',
  //   icon: <CIcon name="cil-graph" customClassName="nav-icon" />,
  // },
]

export default _nav
