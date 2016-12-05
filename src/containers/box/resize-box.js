import React, { Component } from 'react'
import Box from './../../components/box'

export default class ResizableBox extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Box {...this.props}>
				<Box height="24px" width="24px" backgroundColor="#1D1F21">asd</Box>
				{this.props.children}
			</Box>
		)
	}
}