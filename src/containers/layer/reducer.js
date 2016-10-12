import * as types from './constants'

const initialState = {
	childs: [
		{ name: 'box alpha'},
		{ name: 'box beta'}
	],
	selected: true,
	selected2: null,
	direction: 'row'
}

const layer = (state = initialState, action) => {
	switch (action.type) {
		case types.SELECT_LAYER:
			return Object.assign({}, state, { selected: action.selected })

		case types.ADD_CHILD:
			return Object.assign({}, state, { childs: [...state.childs, action.child] })

		case types.TOGGLE_DIRECTION:
			return Object.assign({}, state, { direction: action.direction })

		case types.SELECT_ELEMENT:
			return Object.assign({}, state, { selected2: action.element })

		default:
			return state
	}
}

export default layer