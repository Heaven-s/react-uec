import React from 'react'
import { KeepAlive } from 'react-component-keepalive';
import { history, formatRoutePath } from 'utils'


export default function asyncComponent(componentfn) {
	class LazyloadComponent extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				component: null
			}
		}
		async UNSAFE_componentWillMount() {
			const { default: component } = await componentfn();
			this.setState({ component })
		}
		render() {
			const C = this.state.component;
			const N = formatRoutePath(history.location.pathname)
			C && console.log('pathname', N)
			return C ? <KeepAlive name={N}><C {...this.props} /></KeepAlive> : null;
		}
	}
	return LazyloadComponent;
}
