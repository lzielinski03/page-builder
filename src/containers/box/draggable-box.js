import	 React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { DragSource } from 'react-dnd'
import Box from './../../components/box'

const boxSource = {
	canDrag(props) {
		return props.dragType !== undefined
	},
	beginDrag(props) {
		return { id: props.id, type: props.dragType }
	}
}

@DragSource('BoxLayer', boxSource, (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
})
export default class DragableBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {connectDragSource} = this.props
		// remove drag and drop sources from porps and sprad to childs
		let props = Object.assign({}, this.props, {connectDragSource: undefined})
		return (
			<Box {...props}
				ref={instance => connectDragSource(findDOMNode(instance))}
			/>
		)
	}
}
