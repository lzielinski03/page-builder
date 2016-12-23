import React from 'react'
import styled, { css } from 'styled-components'

/*
	@Params
	flex-direction: 	row | row-reverse | column | column-reverse;
	flex-wrap: 			nowrap | wrap | wrap-reverse;
	justify-content: 	flex-start | flex-end | center | space-between | space-around;
	align-items: 		flex-start | flex-end | center | baseline | stretch;
	align-content: 		flex-start | flex-end | center | space-between | space-around | stretch;

	order: 			<integer>;
	flex-grow: 		<number>;  	default 0 
	flex-shrink: 	<number>; 	default 1
	flex-basis: 	<length> | 	auto; default auto
	align-self: 	auto | flex-start | flex-end | center | baseline | stretch;
  */
const Box = styled.div`
	${ props => {
		const flexParent = ['flex-direction', 'flex-wrap', 'justify-content', 'align-items', 'align-content']
		const flexChildren = ['flex', 'order', 'flex-grow', 'flex-shrink', 'flex-basis', 'align-self']
		const styleProps = ['background-color', 'color', 'width', 'height', 'opacity', 'margin', 'margin-top', 'position', 'align-content', 'display']

		let styles = {}

		// add common css style properties
		styleProps.forEach( style => {
			if (props.hasOwnProperty(style))
				styles[style] = props[style]
		})

		// add flexParent properties to styles
		flexParent.forEach( style => {
			if (props.hasOwnProperty(style))
				styles[style] = props[style]
		})

		// add flexChildren properties to styles
		flexChildren.forEach( style => {
			if (props.hasOwnProperty(style))
				styles[style] = props[style]
		})

		// if exist a flex parent prop, is a flex element, add display flex
		flexParent.forEach( style => {
			if (styles.hasOwnProperty(style) && !styles.hasOwnProperty('display'))
				styles['display'] = 'flex'
		})

		return styles;
	}}
`

Box.defaultProps = {
	'background-color': 'rgb(155, 208, 225)'
}

Box.propTypes = {
	'flex-direction': React.PropTypes.oneOf(['row', 'row-reverse', 'column', 'column-reverse']),
	'flex-wrap': React.PropTypes.oneOf(['nowrap', 'wrap', 'wrap-reverse']),
	'justify-content': React.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around']),
	'align-items': React.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'baseline', 'stretch']),
	'align-content': React.PropTypes.oneOf(['flex-start', 'flex-end', 'center', 'space-between', 'space-around', 'stretch']),

	order: React.PropTypes.number,
	'flex-grow': React.PropTypes.number,
	'flex-shrink': React.PropTypes.number,
	'flex-basis': React.PropTypes.number,
	'align-self': React.PropTypes.oneOf(['auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'])
}

export default Box