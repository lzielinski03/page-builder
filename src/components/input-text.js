import React from 'react'

const InputText = ({ elementStyles, value, handleInput }) => {
	
	const handleChange = (e) => {
		if(e.keyCode === 13) handleInput(e.target.value)
	}
	
	return (<input value={value} type="text" onKeyDown={ handleChange }/>)
}

export default InputText