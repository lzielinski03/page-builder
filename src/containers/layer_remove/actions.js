import * as types from './constants'


//exportado
export const add = (id, child) => {
	return { type: types.ADD_CHILD, id: id, child: child }
}

// remplazar por un asignador/remplazador de propiedad css
export const toggleDirection = direction => {
	return { type: types.TOGGLE_DIRECTION, direction }
}

// remplazar por un asignador/remplazador de propiedad css
export const changeColor = color => {
	return { type: types.CHANGE_COLOR, color }
}


export const toggleSelect = id => {
	return { type: types.TOGGLE_SELECT, id }
}
