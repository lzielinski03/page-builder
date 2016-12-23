import React, { Component } from 'react'
import createFragment from 'react-addons-create-fragment'
import Box from './../box/box'

const element = {
	"Box": Box,
}

export default function LayerBoxHoc(WrappedComponent) {
	return class LayerBoxHOC2 extends Component {

		constructor(props) {
			super(props)
			console.log('super')
		}

		render(){
			console.log('super')

			//let { children } = this.props

			let children = {}
			let props = Object.assign({}, this.props, { children: undefined })

			this.props.children.map( child => {
				children[child.id] = React.createElement(element[child.type], props)
			})


			let fragmentedChildren = createFragment(children)

			return (
				<WrappedComponent>
					{ fragmentedChildren }
				</WrappedComponent>
			)
		}
	}
}