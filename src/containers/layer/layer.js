import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import * as Actions from './actions'
import createFragment from 'react-addons-create-fragment'

import BoxLayer from './../box-layer/box-layer'
import Title from './../../components/title'

// Connect redux
const mapStateToProps = ({layerReducer}) => {
	return { id: layerReducer.id, childs: layerReducer.childs, selected2: layerReducer.selected2, direction: layerReducer.direction }
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
	"BoxLayer": BoxLayer,
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
		let { childs, selected2, layer, connectDropTarget, direction } = this.props
		
		let f = childs.reduce( (init, child, i) => {
			if (child === undefined) return init
			
			if (child.childs.length === 0){
				console.log(...child.props.elementStyles)
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
		let classList = []
		let styles = {}
		styles.flexDirection = direction

		if (selected2 && selected2.type === 'layer')
			classList.push('selected')


		 

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