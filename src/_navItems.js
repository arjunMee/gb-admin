import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Statistics',
    to: '/statistics',
    icon: <CIcon name="cil-graph" customClassName="nav-icon" />,
  },

  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Manage Users',
    to: '/to',
    icon: <CIcon name="cil-puzzle" customClassName="nav-icon" />,
    show: true,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'All Users',
        to: '/users/all',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Verified Users',
        to: '/users/verified',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Suspended Users',
        to: '/users/suspended',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Banned Users',
        to: '/users/banned',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Manage Brands',
    to: '/to',
    icon: <CIcon name="cil-tags" customClassName="nav-icon" />,
    items: [
      //   {
      //     _component: 'CNavItem',
      //     as: NavLink,
      //     anchor: 'All Users',
      //     to: '/users/all',
      //   },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Manage Reports',
    icon: <CIcon name="cil-notes" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'All reports',
        to: '/reports/all',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Pending Reports',
        to: '/reports/pending',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Reported Accounts',
        to: '/reports/reported-accounts',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Reported Comments',
        to: '/reports/reported-comments',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Report Chat',
        to: '/reports/chat',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Safe Reports',
        to: '/reports/safe',
      },
    ],
  },
]

export default _nav
