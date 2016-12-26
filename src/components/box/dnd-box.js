import	 React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { DragSource, DropTarget } from 'react-dnd'
import Box from './../../components/box/box'

const boxSource = {
	canDrag(props) {
		// blocked element can't be dragged
		console.log('Resizable DnDBox canDrag', props)
		
		let drag = true
		if (props.isResizing)
			drag = false
		return drag
	},
	beginDrag(props) {
		return { id: props.id, type: props.type }
	}
}
const boxTarget = {
	drop(props, monitor) {
		if (!monitor.isOver()) return;
		let item = monitor.getItem()

		if ( item.id === undefined && props.drop !== undefined)
			props.drop(item.type, props.elementId)
		
		if ( item.id !== undefined && props.move !== undefined)
			props.move(item, props.elementId)

		return item
	}
}

@DragSource('Box', boxSource, (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
})
@DropTarget('Box', boxTarget, (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
})

class DnDBox extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		elementId: React.PropTypes.number.isRequired,
		drop : React.PropTypes.func.isRequired,
		move: React.PropTypes.func,
		isResizing: React.PropTypes.bool.isRequired
	}

	render() {
		let {connectDragSource, connectDropTarget} = this.props
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

export default DnDBox