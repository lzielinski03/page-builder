import React, { Component } from 'react'
import Box from './../../components/box'

export default class ResizableBox extends Component {
	constructor(props) {
		super(props);
		this.handleRight = this.handleRight.bind(this)
		this.finish = this.finish.bind(this)
		this.move = this.move.bind(this)
		this.state = {width: 100}
	}

	

	handleRight(e) {
		console.log('right')
		console.log(e.type)
		/*
		console.log('client')
		console.log(e.clientX)
		console.log(e.clientY)
		console.log('page')
		console.log(e.pageX)
		console.log(e.pageY)
		console.log('page')
		console.log(e.screenX)
		console.log(e.screenY)*/
		document.addEventListener('mouseup', this.finish, true)
		document.addEventListener('mousemove', this.move, true)
	}

	finish() {
		document.removeEventListener('mouseup', this.finish, true)
		document.removeEventListener('mousemove', this.move, true)
		console.log('end')
	}

	move(e) {
		console.log(e.clientX)
		this.setState({width: e.clientX})
		console.log(e.clientY)
		console.log()
	}

	render() {
		console.log(this.props)
		//let {width} = this.props
		let finalWidth = 100;
		let width = finalWidth + 'px'
		return (
			<Box {...this.props} position="relative" width={this.state.width + 'px'}>
				<div style={{'height':'100%', width:'10px', 'background-color':'white', 'position': 'absolute', right: '-5px'}} 
					onMouseDown={this.handleRight}
					ref="resize"
					 ></div>
				{this.props.children}
			</Box>
		)
	}
}