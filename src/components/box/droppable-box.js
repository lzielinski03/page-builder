import React, { Component } from 'react'
import { findDOMNode } from 'react-dom';
import { DropTarget } from 'react-dnd'
import Box from './../../components/box/box'

const boxTarget = {
	drop(props, monitor) {
		if (!monitor.isOver()) return;
		let item = monitor.getItem()
		console.log(item)

		if ( item.id === undefined && props.drop !== undefined)
			props.drop(item.type, props.elementId)
		
		if ( item.id !== undefined && props.move !== undefined)
			props.move(item, props.elementId)

		return item
	}
}

@DropTarget('Box', boxTarget, (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
})
class BoxDroppable extends Component {

	constructor(props) {
		super(props)
		if(props.magic !== undefined)
			console.log('BoxDroppable', props)
	}

	static propTypes = {
		elementId: React.PropTypes.number.isRequired,
		drop : React.PropTypes.func.isRequired,
		move: React.PropTypes.func
	}

	render() {
		let { connectDropTarget } = this.props
		let props = Object.assign({}, this.props, {
			connectDropTarget: undefined,
			canDrop: undefined,
		})
		return (
			<Box 
			{...props}
			ref={instance => connectDropTarget(findDOMNode(instance))}>
				{this.props.children}
			</Box>
		)
	}
}


export default BoxDroppable