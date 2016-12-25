import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as layerActions from './../../redux/modules/layer';

import LayerBox from './layer-box'
import Box from './../box/box'
import BoxDroppable from './../box/droppable-box'

import LayerBoxHoc from './layer-box-hoc'

@connect(
	state => ({
		elements: state.layer.entities.element
	}),
	dispatch => bindActionCreators(layerActions, dispatch)
)
@LayerBoxHoc
export default class Layer extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {add, elements, element} = this.props

		console.log('Layer props', this.props)
		return (
			<BoxDroppable
				{...elements[0].props.styles}
				drop={add}
				elementId={elements[0].id}>
				{ this.props.children }
			</BoxDroppable>
		)
	}
}