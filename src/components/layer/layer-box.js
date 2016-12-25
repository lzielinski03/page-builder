import React, { Component } from 'react'
import Box from './../box/box'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as layerActions from './../../redux/modules/layer';
import LayerBoxHoc from './layer-box-hoc'

@connect(
	state => ({
		layer: state.layer.entities.element[0]
	}),
	dispatch => bindActionCreators(layerActions, dispatch)
)
@LayerBoxHoc
class LayerBox extends Component {
	constructor(props) {
		super(props)
	}

	static propTypes = {
		id: React.PropTypes.number.isRequired,
		type: React.PropTypes.string.isRequired,
		props: React.PropTypes.object.isRequired
	}

	render() {
		return (
			<div></div>
		)
	}
}

export default LayerBox