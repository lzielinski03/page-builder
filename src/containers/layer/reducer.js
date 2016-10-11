import * as types from './constants'

const initialState = {
	childs: [
		{ name: 'box alpha'},
		{ name: 'box beta'}
	],
	selected: false
}

const layer = (state = initialState, action) => {
	switch (action.type) {
		case types.SELECT_LAYER:
			return {
				childs: Object.assign([], [...state.childs]),
				selected: action.selected
			}

		case types.ADD_CHILD:
			return {
				childs: Object.assign([], [...state.childs, action.child]),
				selected: state.selected
			}

		default:
			return state
	}
}

export default layer