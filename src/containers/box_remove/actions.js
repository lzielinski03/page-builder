const TOGGLE_RESIZE = 'layer-box/TOGGLE_RESIZE'
const CREATE_ELEMENT = 'layer-box/CREATE_ELEMENT'

let id = 0;

const getNext = () => id++;

const createElement = type => {
	//console.log(getNext())
	return { type: CREATE_ELEMENT, payload: { id: id++, type }}
}

const toggleResize = id => {
	return { type: TOGGLE_RESIZE, payload: id }
}

const deserializeElement = element => {
	return {
		type: 'DESERIALIZE_ELEMENTS',
		element: element
	}
}

export {createElement, toggleResize, deserializeElement}