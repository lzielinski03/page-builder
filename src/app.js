import 'babel-polyfill'
import './assets/style.css'
import { createStore, compose } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

import React from 'react'
import ReactDOM from 'react-dom'

import { persistState } from 'redux-devtools'
import DevTools from './containers/devtool'

import Home from './pages/home'



const finalCreateStore = compose(
	DevTools.instrument(),
	persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
)(createStore)

let store = finalCreateStore(reducer)

/*************************************/
import Box from './components/box'
import Subtitle from './components/subtitle'
import createFragment from 'react-addons-create-fragment'

const childs = createFragment({
	'box': React.createElement(Box, {'default': true}),
	'subtitle': React.createElement(Subtitle, {'value': 'hola'})
})

const elements = {
	"Home": Home,
	"Subtitle": Subtitle,
	"Box": Box,
	"Box2": React.createElement(Box, {'fit': true}, childs)
}

const components = {
	"root" : React.createElement(
		Box,
		{'fit': true},
		childs)
}

const Root = components['root']

const App = () => (
		<Provider store={store}>
			<div className="root">
				
				<Home/>
				<DevTools />
			</div>
		</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))