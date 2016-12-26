import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as layerActions from './../../redux/modules/layer';

import DnDBox from './../box/dnd-box'
import LayerBoxHoc from './layer-box-hoc'

@connect(
	state => ({
		elements: state.layer.entities.element
	}),
	dispatch => bindActionCreators(layerActions, dispatch)
)
@LayerBoxHoc
export default class LayerDnDBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {add, elements, element, elementId} = this.props

		return (
			<DnDBox
				{...this.props.styles}
				{...elements[elementId].props.styles}
				type={this.props.type}
				drop={add}
				elementId={elementId}>
				{ this.props.children }
			</DnDBox>
		)
	}
}