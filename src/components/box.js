import React from 'react'
import styled, { css } from 'styled-components'

const box = styled.div`
	background-color: ${ props => props.selected ? '#252620;' : props.backgroundColor };
	opacity: ${ props => props.opacity };
	width: ${ props => props.width };
	height: ${ props => props.height };
`

box.defaultProps = {
	width: '100px',
	height: '100px',
	backgroundColor: 'rgb(155, 208, 225)'
}

export default box

/*
const Box = (props) => {

	let object = {"backgroundcolor"}

	console.log(props)
	

	let { elementStyles, classNames } = props
	console.log(elementStyles, classNames)
	
	const flexProps = ['flex', 'flexGrow', 'flexShrink', 'flexBasis']
	const styleProps = ['backgroundColor', 'color', 'width', 'height']
	let classList = props.className.split(',')
	const styles = props.style

	if (props.column)
		styles.flexDirection = 'column'

	if(props.fit){
		styles.height = '100%'
		styles.width = '100%'
	}

	if (props.default) {
		styles.height = '100px'
		styles.width = '100px'
		if (!props.selected)
			styles.backgroundColor = '#252620'
		styles.margin = '10px'
	}

	if (props.selected)
		classList.push('selected')

	flexProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	styleProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	const handleClick = (e) => {
		props.handleClick(props.id, 'box')
		e.stopPropagation()
	}
	const test = "react-layout-components--box " + classList.join(',')
	
	return(
		<div>
			{props.children}
		</div>
	)
}
*/

