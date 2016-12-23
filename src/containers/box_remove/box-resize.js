import React, { Component } from 'react'
import Resizable from './resize-hoc'
import Box from './../../components/box/box'
// new version of box-resize with hoc

@Resizable
export default class BoxResize extends Component {
	render() {
		return (
			<Box {...this.props}>
				{this.props.children}
			</Box>
		)
	}
}