import React from 'react'
import { DragSource } from 'react-dnd'

//const Box = ({ name, connectDragSource, fit = false, children, column = false }) => {
const Box = (props) => {
	const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
	const styleProps = ['backgroundColor', 'color', 'width', 'height']
	const styles = {}

	if (props.column)
		styles.flexDirection = 'column'

	if(props.fit){
		styles.height = '100%'
		styles.width = '100%'
	}

	if (props.default) {
		styles.height = '100px'
		styles.width = '100px'
		styles.backgroundColor = '#252620'
		styles.margin = '10px'
	}

	flexProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	styleProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	const handleClick = (e) => {
		console.log('box handleClick')
		e.stopPropagation()
	}

	return props.connectDragSource(
		<div style={ {...styles} } className="react-layout-components--box" onClick={ handleClick }>
			{props.children}
		</div>
	)
}

const boxSource = {
	beginDrag(props) {
		return { name: props.name}
	}
}

const collect = (connect, monitor) => {
	return {
		connectDragSource: connect.dragSource(),
		isDragging: monitor.isDragging()
	}
}


export default DragSource('box', boxSource, collect)(Box)