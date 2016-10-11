import React from 'react'

const ToggleButton = ({value, values, handleClick}) => {
	console.log(handleClick)
	const toggle = () => {
		console.log((value == values[0]) ? values[1] : values[0])
		handleClick((value == values[0]) ? values[1] : values[0])
		//value = (value == values[0]) ? values[1] : values[0]
	}
	return (<button onClick={ toggle }>{value}</button>)
}

export default ToggleButton