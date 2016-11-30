import { combineReducers } from 'redux';

// Reducers
import boxReducer from './containers/box-layer/reducer';
import layerReducer from './containers/layer/reducer';
import widgetDownlaodReducer from './containers/download-widget/reducer';

// Combine Reducers
var reducers = combineReducers({
	boxReducer: boxReducer,
	layerReducer: layerReducer,
	widgetDownlaodReducer: widgetDownlaodReducer
});

export default reducers;
