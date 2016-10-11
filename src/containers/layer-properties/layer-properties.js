import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import Title from './../../components/title'
import Subtitle from './../../components/subtitle'

const LayerProperties = (props) => {
	return (
		<div>
			{props.hidden && 
			<div>
				<Title value="Properties" color="white" backgroundColor="#373B41" textAlign="center"/>
				<Subtitle value="Layer" color="white"/>
			</div>}
		</div>
	)
}

const mapStateToProps = ({layerReducer}) => {
	return { hidden: layerReducer.selected }
}
/*
const mapDispatchToProps = dispatch => {
	return { layer: bindActionCreators(Actions, dispatch) }
}
*/
export default connect(
	mapStateToProps
	//,	mapDispatchToProps
)(LayerProperties)