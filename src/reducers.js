import { combineReducers } from 'redux';

// Reducers
import layerReducer from './containers/layer/reducer';
import widgetDownlaodReducer from './containers/download-widget/reducer';

// Combine Reducers
var reducers = combineReducers({
	layerReducer: layerReducer,
	widgetDownlaodReducer: widgetDownlaodReducer
});

export default reducers;
