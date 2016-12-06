import React, { Component } from 'react'
import Box from './../../components/box'

export default class ResizableBox extends Component {
	constructor(props) {
		super(props);
	}

	handleRight(e) {
		console.log('right')
		console.log(e)
	}

	render() {
		console.log(this.props)
		//let {width} = this.props
		let finalWidth = 100;
		let width = finalWidth + 'px'
		return (
			<Box {...this.props} position="relative" width={width}>
				<div style={{'height':'100%', width:'10px', 'background-color':'white', 'position': 'absolute', right: '-5px'}} 
					 onMouseDown={this.handleRight}></div>
				{this.props.children}
			</Box>
		)
	}
}