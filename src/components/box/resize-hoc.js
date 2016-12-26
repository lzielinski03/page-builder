import React, { Component } from 'react'
import ResizeBorder from './../../components/resize-border'

//Props Proxy
export default function Resizable(WrappedComponent) {
	return class ResizableHOC extends Component {

		constructor(props) {
			super(props)
			//this.state = { isResizing: false };
			
			this.onBorderClick = this.onBorderClick.bind(this)
			this.resize = this.resize.bind(this)
			this.finishResize = this.finishResize.bind(this)
		}

		componentWillMount() {
			this.setState({ isResizing: false })

		}

		onBorderClick(direction, e) {
			e.stopPropagation()
			e.preventDefault()
			this.setState({ isResizing: true, direction, startX: e.clientX, startY: e.clientY })
			// dispatch action initialPoint {pointerY, pointerX}
			//console.log('resize hoc onBorderClick', this.props)
			//this.props.initResize(this.props.elementId, e.clientX, e.clientY);
			//console.log('onBorderClick', direction)

			document.addEventListener('mouseup', this.finishResize, true)
			document.addEventListener('mousemove', this.resize, true)

			/*
			function init() {
				console.log('x axis')
				document.addEventListener('mouseup', this.finishResize, true)
				document.addEventListener('mousemove', this.resize, true)
			}

			
			function norte() {
				console.log('norte')
				// dispaych action to set the state with cardinal
			}
			function sur() {
				console.log('surts')
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
			*/
			// create actions, reducers for every direction
			//increase left size, disminuye siblings
/*
			return {
				n: norte,
				s: sur,
				e: este,
				o: oeste,
				ne: noreste,
				no: noroeste,
				se: sureste,
				so: suroeste
			}*/
		}

		resize(e) {
			//console.log('resize', this.props)
			//this.props.resize(this.props.elementId, e.clientX, e.clientY)
			console.log('resize', e.clientX, e.clientY, this.state.direction)
			// dispatch action resize, {direction, pointer}

			//if (this.state.direction === 's') {
				let height =  Number.parseInt(this.props.height.substr(0, this.props.height.length-2))
				let width =  Number.parseInt(this.props.width.substr(0, this.props.width.length-2))
				let diferenceHeight = e.clientY - this.state.startY
				let diferenceWidth = e.clientX - this.state.startX
				let newHeight = height + e.clientY - this.state.startY
				let newWidth = width + e.clientX - this.state.startX
				let newStartY = this.state.startY + e.clientY - this.state.startY
				let newStartX = this.state.newStartX + e.clientX - this.state.startX
				//this.resize(this.props.elementId, null, newHeight)
				this.setState({startY: e.clientY, startX: e.clientX})
				this.props.resize(this.props.elementId, this.state.direction, newWidth, newHeight)
				//this.setState({ width: newHeight, startY: newStartY })
				
			//}
			
			
			
		}

		finishResize(event) {
			console.log('finishResize')
			this.setState({ isResizing: false })
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
					onMouseDown: this.onBorderClick.bind(this, direction)
					//onMouseDown: this.onBorderClick()[direction].bind(this)
				};
				return React.createElement(ResizeBorder, props)
			})
			//console.log(this.props)
			return (
				<WrappedComponent {...this.props} position="relative" isResizing={this.state.isResizing}>
					{/*<div style={{'height':'100%', width:'10px', 'backgroundColor':'white', 'position': 'absolute', right: '-5px'}} 
				onMouseDown={this.onBorderClick}></div>*/}

				{dragBorder}

				{this.props.children}
				</WrappedComponent>
				)
			}
		}
	}