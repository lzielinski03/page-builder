import * as types from './constants'

export const addChild = child => {
	return { type: types.ADD_CHILD2, payload: child }
}