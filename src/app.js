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

const App = () => (
		<Provider store={store}>
			<div className="root">
				<Home/>
				<DevTools />
			</div>
		</Provider>
)

ReactDOM.render(<App />, document.getElementById('root'))