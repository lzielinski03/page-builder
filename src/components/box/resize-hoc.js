import React, { Component } from 'react'
import ResizeBorder from './../../components/resize-border'

//Props Proxy


export default function Resizable(WrappedComponent) {
	return class ResizableHOC extends Component {

		constructor(props) {
			super(props)
			this.state = { isResizing: false };
			
			this.onBorderClick = this.onBorderClick.bind(this)
			this.resize = this.resize.bind(this)
			this.finishResize = this.finishResize.bind(this)
		}

		onBorderClick(event) {
			// dispatch action initialPoint {pointerY, pointerX}
			//console.log('onBorderClick')
			

			function n() {
				console.log('x axis')
				document.addEventListener('mouseup', this.finishResize, true)
				document.addEventListener('mousemove', this.resize, true)
			}

			
			function norte() {
				console.log('norte')
				// dispaych action to set the state with cardinal
			}
			function sur() {
				console.log('sur')
				// dispaych action to set the state with cardinal
			}
			function este() {
				console.log('este')
				// dispaych action to set the state with cardinal
			}
			function oeste() {
				console.log('oeste')
				// dispaych action to set the state with cardinal
			}
			function noreste() {
				console.log('noreste')
				// dispaych action to set the state with cardinal
			}
			function noroeste() {
				console.log('noroeste')
				// dispaych action to set the state with cardinal
			}
			function sureste() {
				console.log('sureste')
				// dispaych action to set the state with cardinal
			}
			function suroeste() {
				console.log('suroeste')
				// dispaych action to set the state with cardinal
			}

			// create actions, reducers for every direction
			//increase left size, disminuye siblings

			return {
				n: norte,
				s: sur,
				e: este,
				o: oeste,
				ne: noreste,
				no: noroeste,
				se: sureste,
				so: suroeste
			}
		}

		resize(event) {
			//console.log('resize')
			// dispatch action resize, {direction, pointer}
			/* 
			let diference = e.clientX - this.state.startY
			let newWidth = this.state.width + e.clientX - this.state.startY
			let newStartY = this.state.startY + e.clientX - this.state.startY
			
			this.setState({ width: newWidth, startY: newStartY })
			*/
		}

		finishResize(event) {
			//console.log('finishResize')
			//this.setState({ startY: null })
			// dispatch action finishResize {pointer null}
			document.removeEventListener('mouseup', this.finishResize, true)
			document.removeEventListener('mousemove', this.resize, true)
		}

		render(){
			let positions = ['n', 's', 'e', 'o', 'ne', 'no', 'se', 'so'];
			let dragBorder = positions.map( (direction, index) => {
				let props = {
					position: direction,
					key: index,
					onMouseDown: this.onBorderClick()[direction].bind(this)
				};
				return React.createElement(ResizeBorder, props)
			})
			
			return (
				<WrappedComponent {...this.props} position="relative">
					<div style={{'height':'100%', width:'10px', 'backgroundColor':'white', 'position': 'absolute', right: '-5px'}} 
					onMouseDown={this.onBorderClick}></div>

					{dragBorder}

					{this.props.children}
				</WrappedComponent>
			)
		}
	}
}