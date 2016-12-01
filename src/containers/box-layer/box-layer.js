import React, { Component } from 'react'
import { DragSource, DropTarget } from 'react-dnd'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './../layer/actions'
import * as Actions2 from './actions'

//const BoxLayer = ({ name, connectDragSource, fit = false, children, column = false }) => {

// connect
const mapStateToProps = ({layerReducer}) => {
	return { 
		dashboard: layerReducer.dashboard,
		childs: layerReducer.childs,
		selected2: layerReducer.selected2,
		direction: layerReducer.direction }
}

const mapDispatchToProps = dispatch => {
	return {
		box: bindActionCreators(Actions2, dispatch),
		layer: bindActionCreators(Actions, dispatch)
	}
}


// Drag Source
const boxSource = {
	canDrag(props) {
		return props.dragType !== undefined
	},
	beginDrag(props) {
		//console.log("props source", props)
		return { id: props.id, type: props.dragType }
	}
}

const collectDrag = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}

// Drop Target
const boxTarget = {
	drop(props, monitor) {
		if (!monitor.isOver())
			return;
		console.log('add to box')
		props.layer.add(props.id, monitor.getItem())
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
@DropTarget('BoxLayer', boxTarget, collectDrop)
export default class BoxLayer extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		//this.props.handleClick(this.props.id, 'box')
		e.stopPropagation()
	}

	render() {
		const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
		const styleProps = ['backgroundColor', 'color', 'width', 'height']
		let classList = []
		const styles = {}
		const props = this.props

		if(props.dashboard.selected[0].id === props.id)
			classList.push('selected')


		//console.log((this.props.children === undefined && this.props.magic === true))
		

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
			if (!props.selected)
				styles.backgroundColor = '#252620'
			styles.margin = '10px'
		}

		if (props.selected)
			classList.push('selected')

		flexProps.forEach( prop => {
			if (props.hasOwnProperty(prop))
				styles[prop] = props[prop]
		})

		styleProps.forEach( prop => {
			if (props.hasOwnProperty(prop)){
				styles[prop] = props[prop]
			}
		})
/*
		if (this.props.magic === true){
			console.log(this.props.elementStyles)
			props.elementStyles.forEach( prop => {
				console.log(prop)
				if (props.hasOwnProperty(prop)){
					styles[prop] = props[prop]
				}
			})
		}*/
		
		//console.log(this.props.children)
		return this.props.connectDragSource(this.props.connectDropTarget(
			<div style={ {...styles} }
				className={[ ...classList ]}
				//className={ "react-layout-components--box " + [...classList] }
				onClick={ this.handleClick }>
				{this.props.children}
			</div>
		))
	}
}
