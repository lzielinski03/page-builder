import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as layerActions from './../../redux/modules/layer';

import BoxDroppable from './box-droppable'

@connect(
	state => ({
		layer: state.layer.entities.element[0]
	}),
	dispatch => bindActionCreators(layerActions, dispatch)
)
export default class Layer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		console.log(this.props)
		let {addElement, layer} = this.props
		let {styles} = layer.props;
		return (
			<BoxDroppable {...styles} drop={addElement} elementId={layer.id}/>
		)
	}
}