import React, { Component } from 'react'
import createFragment from 'react-addons-create-fragment'
import Box from './../box/box'
import LayerDnDBox from './layer-dnd-box'
import LayerResizeDnDBox from './layer-resize-dnd-box'

const elementTypes = {
	"Box": Box,
	"DraggableBox": LayerDnDBox,
	"ResizableDraggableBox": LayerResizeDnDBox,
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
					let childProps = Object.assign({}, childElem.props,
						{ 
							elementId: childElem.id,
							type: childElem.type,
							styles: {
								...childElem.props.styles,
								'background-color': randomRGB()
							}
						})
				
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

function randomRGB(){
	let random = () => {
		return Math.floor(Math.random() * 255) + 1  
	}
	return 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
}