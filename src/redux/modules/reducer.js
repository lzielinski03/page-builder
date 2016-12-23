import { combineReducers } from 'redux'

// Reducers
//import boxReducer from './containers/box-layer/reducer'
//import layerReducer from './containers/layer/reducer'
//import widgetDownlaodReducer from './containers/download-widget/reducer'
import layer from './layer'
//import layerBoxReducer from './containers/box/reducer'

// Combine Reducers
var reducers = combineReducers({
	//elements: layerBoxReducer,
	layer: layer,
	//boxReducer: boxReducer,
	//layerReducer: layerReducer,
	//widgetDownlaodReducer: widgetDownlaodReducer
});

export default reducers;
