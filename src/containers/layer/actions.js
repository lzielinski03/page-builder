import * as types from './constants'

export const add = child => {
	return { type: types.ADD_CHILD, child }
}

export const select = selected => {
	return { type: types.SELECT_LAYER, selected }
}