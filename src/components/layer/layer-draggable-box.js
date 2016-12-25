import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as layerActions from './../../redux/modules/layer';

import BoxDraggable from './../box/draggable-box'
import LayerBoxHoc from './layer-box-hoc'

@connect(
	state => ({
		elements: state.layer.entities.element
	})
)
@LayerBoxHoc
export default class LayerDraggableBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {add, elements, element, elementId} = this.props

		console.log('Layer draggable box props', this.props)
		return (
			<BoxDraggable
				{...elements[elementId].props.styles}
				type={this.props.type}
				elementId={elementId}>
				{ this.props.children }
			</BoxDraggable>
		)
	}
}