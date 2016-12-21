import React from 'react'
import styled, { css } from 'styled-components'

const position = {
	n: () => css`
		top: -5px;
		height: 10px;
		width: 100%;
	`,
	s: () => css`
		bottom: -5px;
		height: 10px;
		width: 100%;
	`,
	e: () => css`
		left: -5px;
		width: 10px;
		height: 100%
	`,
	o: () => css`
		right: -5px;
		width: 10px;
		height: 100%
	`,
	ne: () => css`
		top: -5px;
		left: -5px;
		width: 10px;
		height: 10px;
	`,
	no: () => css`
		top: -5px;
		right: -5px;
		width: 10px;
		height: 10px;
	`,
	se: () => css`
		bottom: -5px;
		left: -5px;
		width: 10px;
		height: 10px;
	`,
	so: () => css`
		bottom: -5px;
		right: -5px;
		width: 10px;
		height: 10px;
	`
}


const ResizeBorder = styled.div`
	position:absolute;
	background-color: red;
	${ props => position[props.position] }
`

export default ResizeBorder