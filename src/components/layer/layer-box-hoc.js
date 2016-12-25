import React, { Component } from 'react'
import createFragment from 'react-addons-create-fragment'
import Box from './../box/box'
import LayerDraggableBox from './layer-draggable-box'

const elementTypes = {
	"Box": Box,
	"DraggableBox": LayerDraggableBox
}

export default function LayerBoxHoc(WrappedComponent) {
	return class LayerBoxHOC2 extends Component {

		constructor(props) {
			super(props)
		}

		render(){

			let { elements, elementId } = this.props
			let element = elements[elementId]

			let children = {}
			let props = Object.assign({}, this.props)

			if (element.props.children !== undefined)
				element.props.children.map( child => {
					let childElem = elements[child]
					console.log(childElem.type)
					let childProps = Object.assign({}, childElem.props, { elementId: childElem.id, type: childElem.type })
					console.log(childProps)
					children[element.id + '-' + child] = React.createElement(
						elementTypes[childElem.type],
						childProps
					)
					return children
				})

			let fragmentedChildren = createFragment(children)
			
			return (
				<WrappedComponent { ...props }>
					{ fragmentedChildren }
				</WrappedComponent>
			)
		}
	}
}