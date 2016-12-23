import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd'
import Box from './../../components/box/box'

const boxSource = {
	canDrag(props) {
		//return props.dragType !== undefined
		// blocked element can't be dragged
		return true
	},
	beginDrag(props) {
		return { id: props.id, type: props.type }
	}
}

@DragSource('Box', boxSource, (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
})
class DragableBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {connectDragSource} = this.props
		let props = Object.assign({}, this.props, {connectDragSource: undefined})
		return (
			<Box {...props}
				ref={instance => connectDragSource(findDOMNode(instance))}
			/>
		)
	}
}

export default DragableBox