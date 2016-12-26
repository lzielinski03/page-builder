import 'babel-polyfill'
import React from 'react'
import { bindActionCreators } from 'redux' // shoud not be here
import { connect } from 'react-redux' // shoud not be here
import { DragDropContext } from 'react-dnd' // shoud not be here
import HTML5Backend from 'react-dnd-html5-backend' // shoud not be here

import Title from './../components/title'
import Subtitle from './../components/subtitle'
import Button from './../components/button'
import Layer from './../components/layer/layer'
import LayerPanel from './../containers/layer-panel/layer-panel'

import Box from './../components/box/box'
import DragableBox from './../components/box/draggable-box'
import DroppableBox from './../components/box/droppable-box'
import DnDBox from './../components/box/dnd-box'
import ResizableBox from './../components/box/resize-box'
import ResizableDragableBox from './../components/box/resize-draggable-box'

//import BoxLayer from './../containers/box-layer/box-layer'
//import LayerProperties from './../containers/layer/layer-properties'
//import Layer from './../containers/layer/layer'
//import FileDownload from './../containers/download-widget/file-download'

/*
import BoxResize from './../containers/box/box-resize'
import ResizableDnDBox from './../containers/box/resize-dnd-box'
import ResizableBox from './../containers/box/resize-box'
import DragableBox from './../containers/box/draggable-box'
import DnDBox from './../containers/box/dnd-box'
*/

// make a hoc for DragDropContext?
const Page = () => {
	return (
		<div className="root">
			<Box height="100%" width="100%" display="flex">
				<Box direction="column" flex="0 0 20%" background-color="#1D1F21">
					<Title value="Drag & Drop" color="white" backgroundColor="#373B41" textAlign="center"/>
					
					<Subtitle value="Box" color="white" marginTop="20px"/>
					<Box background-color="#9BD0E1" width="100px" height="100px"/>

					<Subtitle value="Draggable Box" color="white" marginTop="20px"/>
					<DragableBox width="50px" height="50px" background-color="blue" type="DraggableBox"/>

					<Subtitle value="Resizable Box" color="white" marginTop="20px"/>
					<ResizableBox width="50px" height="50px" background-color="orange"/>

					<Subtitle value="Resizable & Dragable & Droppable Box" color="white"/>
					<ResizableDragableBox width="50px" height="50px" background-color="purple" type="ResizableDraggableBox"/>
					
{/*
					<FileDownload
						label="Download proyect"
						url='http://localhost:3000/compile'
						method='POST'
						/>
*/}

						{/*
					<Subtitle value="Test" color="white"/>
					<Box width="auto" height="auto" background-color="orange" direction="row">

						<Box width="50px" height="50px">
							<Box width="25px" height="25px" background-color="red"/>
						</Box>

						<DragableBox width="50px" height="50px" backgroundColor="blue" dragType="BoxLayer"/>
						<DnDBox width="50px" height="50px" backgroundColor="green" dropType="BoxLayer" dragType="BoxLayer"/>
						<ResizableBox width="100" height="100px" margin="10px"><p>qwe</p></ResizableBox>

						<ResizableDnDBox/>

						<BoxResize backgroundColor="purple">
							<p>jorge</p>
						</BoxResize>
					</Box>
						*/}
				</Box>
				
				<Box direction="column" flex="1 1 auto" >
					<Layer elementId="0"/>
				</Box>

				<Box direction="column" flex="0 0 20%" background-color="#1D1F21">
					<LayerPanel/>
				</Box>
			</Box>
		</div>
	)
}

export default DragDropContext(HTML5Backend)(Page)

/*
<div className="root">
	<BoxLayer fit className="react-layout-components--box">
		<BoxLayer column flex="0 0 20%" backgroundColor="#1D1F21">
			<Title value="Drag & Drop" color="white" backgroundColor="#373B41" textAlign="center"/>
			<Subtitle value="Layout" color="white"/>
			<BoxLayer backgroundColor="#9BD0E1" width="100px" height="100px" dragType="BoxLayer"/>
			

			<FileDownload
				label="Download proyect"
				url='http://localhost:3000/compile'
				method='POST'
				/>


			<Subtitle value="Test" color="white"/>
			<Box width="auto" height="auto" backgroundColor="orange" row>

				<Box width="50px" height="50px">
					<Box width="25px" height="25px" backgroundColor="red"/>
				</Box>
				<DragableBox width="50px" height="50px" backgroundColor="blue" dragType="BoxLayer"/>
				<DnDBox width="50px" height="50px" backgroundColor="green" dropType="BoxLayer" dragType="BoxLayer"/>
				<ResizableBox width="100" height="100px" margin="10px"><p>qwe</p></ResizableBox>

				<ResizableDnDBox/>

				<BoxResize backgroundColor="purple">
					<p>jorge</p>
				</BoxResize>

			</Box>
		</BoxLayer>
		
		<Box column flex="1 1 auto" >
			<Layer/>
		</Box>

		<BoxLayer column flex="0 0 20%" backgroundColor="#1D1F21">
			<LayerPanel/>
		</BoxLayer>
	</BoxLayer>
</div>
*/