import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DropTarget } from 'react-dnd'
import * as Actions from './actions'
import Box from './../../components/box'

const boxTarget = {
	drop(props, monitor) {
		props.layer.add(monitor.getItem())
	}
}

const collect = (connect, monitor) => {
	return {
		connectDropTarget: connect.dropTarget(),
		isOver: monitor.isOver(),
		canDrop: monitor.canDrop()
	}
}

const Layer = ({ childs, selected, layer, connectDropTarget }) => {
	let classList = []
	if (selected)
		classList.push('selected')

	const handleClick = () => {
		layer.select(!selected)
	} 

	return connectDropTarget(
		<div className={ 'layer ' + [...classList] } onClick={ handleClick }>
			{ childs.map( (item, i) => {
				return <Box key={i} default />
			}) }
		</div>
	)
}

const mapStateToProps = ({layerReducer}) => {
	return { childs: layerReducer.childs, selected: layerReducer.selected }
}

const mapDispatchToProps = dispatch => {
	return { layer: bindActionCreators(Actions, dispatch) }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DropTarget('box', boxTarget, collect)(Layer))