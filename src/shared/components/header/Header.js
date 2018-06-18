import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => (
  <ul>
		<NavLink exact activeStyle={{ fontWeight: 'bold' }} to='/'>
			<li>Home</li>
		</NavLink>
  </ul>
)

export default Header
