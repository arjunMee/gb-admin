import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/dashboard/home',
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
    to: '/dashboard/home/statistics',
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
        to: '/dashboard/home/users/all',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Verified Users',
        to: '/dashboard/home/users/verified',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Suspended Users',
        to: '/dashboard/home/users/suspended',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Banned Users',
        to: '/dashboard/home/users/banned',
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
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'All Users',
        to: '/dashboard/home/users/all',
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Badges',
            to: '/dashboard/home/notifications/badges',
          },
        ],
      },
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
        to: '/dashboard/home/reports/all',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Pending Reports',
        to: '/dashboard/home/reports/pending',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Reported Accounts',
        to: '/dashboard/home/reports/reported-accounts',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Reported Comments',
        to: '/dashboard/home/reports/reported-comments',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Report Chat',
        to: '/dashboard/home/reports/chat',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Safe Reports',
        items: [
          {
            _component: 'CNavItem',
            as: NavLink,
            anchor: 'Badges',
            to: '/dashboard/home/notifications/badges',
          },
        ],
      },
    ],
  },
]

export default _nav
