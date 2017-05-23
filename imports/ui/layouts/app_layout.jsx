import React, { Component } from 'react'
import { render } from 'react-dom';
import AccountsUIWrapper from '../accounts/accounts_ui_wrapper'

import { Scholarships } from '../../ui/pages/scholarships'

//'content' corresponds to the region defined in the FlowRouter route.
// export const AppLayout = (props) => {
//   return (
// 	<div>
// 		<SidebarLeftOverlay />
// 	    {props.content(props)}
// 	</div>
//   )
// }

// export default class AppLayout extends Component {
// 	render() {
//     return (
//       <div>
//         <header><h1>This is the Header</h1></header>
//         <main>{this.props.content}</main>
//         <footer>This is the Footer</footer>
//       </div>
//     );
//   }
// };

export const AppLayout = ({content}) => <div>{content}</div>