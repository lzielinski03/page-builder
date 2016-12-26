import React, { Component } from 'react'
import Resizable from './resize-hoc'
import DnDBox from './dnd-box'

@Resizable
export default class ResizeDnDBox extends Component {
	render() {
		return (
			<DnDBox {...this.props}>
				{this.props.children}
			</DnDBox>
		)
	}
}