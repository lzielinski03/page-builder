import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as layerActions from './../../redux/modules/layer';

import LayerBox from './layer-box'
import Box from './../box/box'
import BoxDroppable from './../box/droppable-box'

@connect(
	state => ({
		elements: state.layer.entities.element
	}),
	dispatch => bindActionCreators(layerActions, dispatch)
)
export default class Layer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {add, elements} = this.props
		let layer = elements[0]


		console.log(layer)
		let {styles} = layer.props;
		return (
			<BoxDroppable {...styles} drop={add} elementId={layer.id}>
				<LayerBox/>
			</BoxDroppable>
		)
	}
}