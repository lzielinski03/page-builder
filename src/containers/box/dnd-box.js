import	 React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd'
import Box from './../../components/box'

const boxSource = {
	canDrag(props) {
		return props.dragType !== undefined
	},
	beginDrag(props) {
		return { id: props.id, type: props.dragType }
	}
}
const boxTarget = {
	drop(props, monitor) {
		if (!monitor.isOver())
			return;
		console.log('droped in dnd-box')
		//props.layer.add(props.id, monitor.getItem())
	}
}

@DragSource('BoxLayer', boxSource, (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
})
@DropTarget('BoxLayer', boxTarget, (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
})

// Drag and Drop Box
export default class DnDBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {connectDragSource, connectDropTarget} = this.props
		// remove drag and drop sources from porps and sprad to childs
		let props = Object.assign({}, this.props, {connectDragSource: undefined, connectDropTarget: undefined})

		return (
			<Box {...props}
				ref={instance => {
						const node = findDOMNode(instance)
						connectDragSource(node)
						connectDropTarget(node)
					}
				}
			/>
		)
	}
}
