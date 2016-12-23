import	 React, { Component } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../layer_remove/actions'
import * as Actions2 from './actions'
/*
// connect ??
const mapStateToProps = ({layerReducer}) => {
	return { 
		dashboard: layerReducer.dashboard,
		childs: layerReducer.childs,
		direction: layerReducer.direction }
}

const mapDispatchToProps = dispatch => {
	return {
		box: bindActionCreators(Actions2, dispatch),
		layer: bindActionCreators(Actions, dispatch)
	}
}

// Drag Source => Dragable
const boxSource = {
	canDrag(props) {
		return props.dragType !== undefined
	},
	beginDrag(props) {
		return { id: props.id, type: props.dragType }
	}
}

const collectDrag = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

// Drop Target => Dropeable
const boxTarget = {
	drop(props, monitor) {
		if (!monitor.isOver())
			return;
		//props.layer.add(props.id, monitor.getItem())
	}
}

const collectDrop = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
}

@connect(mapStateToProps,mapDispatchToProps)
@DragSource('BoxLayer', boxSource, collectDrag)
@DropTarget('BoxLayer', boxTarget, collectDrop)*/
export default class BoxLayer extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	// BoxLayer
	handleClick(e) {
		if(this.props.magic)
			this.props.layer.toggleSelect(this.props.id)
		e.stopPropagation()
	}

	// Box
	render() {
		const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
		const styleProps = ['backgroundColor', 'color', 'width', 'height']
		let classList = []
		const styles = {}
		const props = this.props
/*
		props.dashboard.selected.forEach(id => {
			if (id === props.id){
				classList.push('selected')
				let index = styleProps.indexOf('backgroundColor')
				styleProps.splice(index, 1)
			}
		})
*/
		if (typeof this.props.className === 'string')
			classList.push(this.props.className)

		if (props.column)
			styles.flexDirection = 'column'

		if(props.fit){
			styles.height = '100%'
			styles.width = '100%'
		}

		if (props.default) {
			styles.height = '100px'
			styles.width = '100px'
			styles.margin = '10px'
			if (styleProps.includes('backgroundColor'))
				styles.backgroundColor = '#999'
		}

		flexProps.forEach( prop => {
			if (props.hasOwnProperty(prop))
				styles[prop] = props[prop]
		})

		styleProps.forEach( prop => {
			if (props.hasOwnProperty(prop)){
				styles[prop] = props[prop]
			}
		})
		return ((
			<div style={ {...styles} }
				className={[ ...classList ]}
				//className={ "react-layout-components--box " + [...classList] }
				onClick={ this.handleClick }>
				{this.props.children}
			</div>
		))
	}
}
