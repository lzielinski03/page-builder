import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as layerActions from './../../redux/modules/layer';

import ResizeDnDBox from './../box/resize-dnd-box'
import LayerBoxHoc from './layer-box-hoc'

@connect(
	state => ({
		elements: state.layer.entities.element
	}),
	dispatch => bindActionCreators(layerActions, dispatch)
)
@LayerBoxHoc
export default class LayerResizeDnDBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		let {add, elements, element, elementId, isResizing, initResize, resize} = this.props
		return (
			<ResizeDnDBox
				{...this.props.styles}
				{...elements[elementId].props.styles}
				type={this.props.type}
				drop={add}
				initResize={initResize}
				resize={resize}
				isResizing={isResizing}
				elementId={elementId}>
				{ this.props.children }
			</ResizeDnDBox>
		)
	}
}