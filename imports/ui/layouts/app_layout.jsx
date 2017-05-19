import React from 'react'
import AccountsUIWrapper from '../accounts/accounts_ui_wrapper'
import SidebarLeftOverlay from '../components/sidebar'
// import Header from './header.jsx'
// import Footer from './footer.jsx'

//'content' corresponds to the region defined in the FlowRouter route.
export const AppLayout = (props) => {
  return (
	<div>
		<SidebarLeftOverlay />
	    {props.content(props)}
	</div>
  )
}

// export const AppLayout = (props) => {
//   return (
// 	<div>
// 		<SidebarLeftOverlay />
// 	</div>
//   )
// }