import React from 'react'
import CIcon from '@coreui/icons-react'
import { NavLink } from 'react-router-dom'

const _nav = [
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Dashboard',
    to: '/tournament/home',
    icon: <CIcon icon="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Events',
    to: '/to',
    icon: <CIcon icon="cil-puzzle" customClassName="nav-icon" />,
    show: true,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'All Events',
        to: '/tournament/event/allEvent',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Review Events',
        to: '/tournament/event/reviewEvent',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Cancelled Events',
        to: '/tournament/event/cancelEvent',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Spam Events',
        to: '/tournament/event/spamEvent',
      },
    ],
  },
  {
    _component: 'CNavGroup',
    as: NavLink,
    anchor: 'Tickets',
    to: '/to',
    icon: <CIcon icon="cil-tags" customClassName="nav-icon" />,
    items: [
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'All Tickets',
        to: '/tournament/ticket/allTicket',
      },
      {
        _component: 'CNavItem',
        as: NavLink,
        anchor: 'Cancelled Tickets',
        to: '/tournament/ticket/cancelTicket',
      },
    ],
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Revenue',
    to: '/tournament/revenue',
    icon: <CIcon icon="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Ads',
    to: '/tournament/ads',
    icon: <CIcon icon="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Payments',
    to: '/tournament/payments',
    icon: <CIcon icon="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Analytics',
    to: '/tournament/analytics',
    icon: <CIcon icon="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {
    _component: 'CNavItem',
    as: NavLink,
    anchor: 'Support',
    to: '/tournament/support',
    icon: <CIcon icon="cil-speedometer" customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
]

export default _nav
