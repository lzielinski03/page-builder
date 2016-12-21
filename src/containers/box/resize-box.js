import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Box from './../../components/box'

export default class ResizableBox extends Component {
	constructor(props) {
		super(props);
		this.handleRight = this.handleRight.bind(this)
		this.finish = this.finish.bind(this)
		this.move = this.move.bind(this)
		this.state = { width: 100, startY: null }
	}

	handleRight(e) {
		this.setState({ startY: e.clientX })

		document.addEventListener('mouseup', this.finish, true)
		document.addEventListener('mousemove', this.move, true)
	}

	move(e) {
		let diference = e.clientX - this.state.startY
		let newWidth = this.state.width + e.clientX - this.state.startY
		let newStartY = this.state.startY + e.clientX - this.state.startY
		
		this.setState({ width: newWidth, startY: newStartY })
	}

	finish() {
		this.setState({ startY: null })

		document.removeEventListener('mouseup', this.finish, true)
		document.removeEventListener('mousemove', this.move, true)
	}

	render() {
		return (
			<Box {...this.props}
				position="relative"
				width={this.state.width + 'px'}
				//ref={(rightBar) => {this.rightBar = findDOMNode(rightBar)}}
				>
				
				<div style={{'height':'100%', width:'10px', 'backgroundColor':'white', 'position': 'absolute', right: '-5px'}} 
					onMouseDown={this.handleRight}></div>
				
				{this.props.children}
			</Box>
		)
	}
}