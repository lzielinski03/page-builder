import 'babel-polyfill'
import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

import BoxLayer from './../containers/box-layer/box-layer'
import Title from './../components/title'
import Subtitle from './../components/subtitle'

import Layer from './../containers/layer/layer'
import LayerProperties from './../containers/layer/layer-properties'

const Page = () => {
	return (
		<div className="root">
			<BoxLayer fit>
				<BoxLayer column flex="0 0 20%" backgroundColor="#1D1F21">
					<Title value="Drag & Drop" color="white" backgroundColor="#373B41" textAlign="center"/>
					<Subtitle value="Layout" color="white"/>
					<BoxLayer backgroundColor="#9BD0E1" width="100px" height="100px"/>
				</BoxLayer>
				
				<BoxLayer column flex="1 1 auto" >
					<Layer/>
				</BoxLayer>

				<BoxLayer column flex="0 0 20%" backgroundColor="#1D1F21">
					<LayerProperties />
				</BoxLayer>
			</BoxLayer>
		</div>
	)
}

export default DragDropContext(HTML5Backend)(Page)