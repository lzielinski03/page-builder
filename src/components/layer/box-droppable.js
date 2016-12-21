import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { findDOMNode } from 'react-dom';
import Box from './../../components/box'
// new version of box-droppable with hoc

const boxTarget = {
		drop(props, monitor) {
			if (!monitor.isOver()) return;
			props.drop(monitor.getItem().type, props.elementId)
			return monitor.getItem()
		}
	}

	const collect = (connect, monitor) => {
		return {
			connectDropTarget: connect.dropTarget(),
			isOver: monitor.isOver(),
			canDrop: monitor.canDrop()
		}
	}

@DropTarget('BoxLayer', boxTarget, collect)
export default class BoxDroppable extends Component {
	render() {
		let { connectDropTarget } = this.props
		return (
			<Box 
				{...this.props}
				ref={instance => connectDropTarget(findDOMNode(instance))}
			>
				{this.props.children}
			</Box>
		)
	}
}