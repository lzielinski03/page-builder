import React from 'react'

const Subtitle = (props) => {
	const styleProps = ['backgroundColor', 'color', 'textAlign', 'margin', 'marginTop']
	const styles = {}

	styleProps.forEach( prop => {
		if (props.hasOwnProperty(prop))
			styles[prop] = props[prop]
	})

	return (<h2 style={{ ...styles }}>{ props.value }</h2>)
}

export default Subtitle
