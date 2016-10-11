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

const Layer = ({ childs, selected, layer, connectDropTarget, direction }) => {
	let classList = []
	let styles = {}
	styles.flexDirection = direction
	if (selected)
		classList.push('selected')

	const handleClick = () => {
		layer.select(!selected)
	} 

	return connectDropTarget(
		<div className={ 'layer ' + [...classList] } onClick={ handleClick } style={{...styles}}>
			{ childs.map( (item, i) => {
				return <Box key={i} default />
			}) }
		</div>
	)
}

const mapStateToProps = ({layerReducer}) => {
	return { childs: layerReducer.childs, selected: layerReducer.selected, direction: layerReducer.direction }
}

const mapDispatchToProps = dispatch => {
	return { layer: bindActionCreators(Actions, dispatch) }
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DropTarget('box', boxTarget, collect)(Layer))