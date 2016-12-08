import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import * as Actions from './actions'
import createFragment from 'react-addons-create-fragment'

import BoxLayer from './../box-layer/box-layer'
import ResizeBox from './../box/resize-box'
import Title from './../../components/title'

// Connect redux
const mapStateToProps = ({layerReducer}) => {
	return { 
		id: layerReducer.id,
		childs: layerReducer.childs,
		dashboard: layerReducer.dashboard,
		direction: layerReducer.direction 
	}
}

const mapDispatchToProps = dispatch => {
	return { layer: bindActionCreators(Actions, dispatch) }
}

// Drop target
const boxTarget = {
	drop(props, monitor) {
		if (!monitor.isOver()) return;

		props.layer.add(props.id, monitor.getItem())
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

const elements = {
	"BoxLayer": ResizeBox,
	"Title": Title
}

@connect(mapStateToProps, mapDispatchToProps)
@DropTarget('BoxLayer', boxTarget, collect)
export default class Layer extends Component {

	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick(e) {
		console.log('handleClick')
		this.props.layer.toggleSelect(this.props.id)
		e.stopPropagation()
	}

	render() {
		let { childs, layer, connectDropTarget, direction, dashboard, id } = this.props

		const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
		const styleProps = ['backgroundColor', 'color', 'width', 'height']
		let classList = []
		const styles = {}

		dashboard.selected.forEach(selectedId => {
			if (selectedId === id){
				classList.push('selected')
				let index = styleProps.indexOf('backgroundColor')
				styleProps.splice(index, 1)
			}
		})

		
		let f = childs.reduce( (init, child, i) => {
			if (child === undefined) return init
			
			if (child.childs.length === 0){
				init[child.type + i] = React.createElement(elements[child.type], {
					'default': true, id: child.id, magic: true, elementStyles: [...child.props.elementStyles]
				})
				return init
			}

			let x = child.childs.reduce( (result, innerChild, i) => {
				result[innerChild.type + i] = React.createElement(elements[innerChild.type], { magic: true, 'backgroundColor': "#999", "width" : "50px", "height": "50px"})
				return result
			}, {})

			let children = createFragment(x)
			init[child.type + i] = React.createElement(elements[child.type], {'default': true, id: child.id, magic: true, children: children})

			return init
		}, {})


		childs = createFragment(f)
		styles.flexDirection = direction

		const select = (id, type) => {
			layer.selectElement({id, 'type': type})
		}
		return connectDropTarget(
			<div className={ 'layer ' + [...classList] } onClick={ this.handleClick } style={{...styles}}>
				{ 
					childs
				}
			</div>
		)
	}
}