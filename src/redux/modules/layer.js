const ADD_ELEMENT = 'layer-box/ADD_ELEMENT'

const initialState = {
	entities: {
		element: {
			0: {
				id: 0,
				type: 'layer',
				props: {
					styles: {
						height: '100%',
						'background-color': '#d2d2d2',
						display: 'flex',
						'flex-wrap': 'wrap',
						'align-content': 'flex-start'
					},
					children: []
				}
			}
		}
	}
}

let id = 1;

const getId = () => id++;

export const add = (type, parent) => {
	let id = getId();

	return { type: ADD_ELEMENT, parent, element: newElement(id, type, parent) }
}

export default function reducer (state = initialState, action) {
//	console.log(action)
	switch(action.type){
		case ADD_ELEMENT:
			return {
				...state,
				entities: {
					...state.entities,
					element: {
						...state.entities.element,
						[action.element.id]: {
							...action.element
						},
						[action.parent]: {
							...state.entities.element[action.parent],
							props: {
								...state.entities.element[action.parent].props,
								children: [
									...state.entities.element[action.parent].props.children,
									action.element.id
								]
							}
						}
					}
				}
				
			}
		default:
			return state;
	}
}

function newElement(id, type, parent) {
	return {
		id: id,
		type: type,
		parent: parent,
		props: {
			styles: {
				width: '100px',
				height: '100px'
			},
			children: []
		}
	}
}

//add(child, to)

//move(child, from, to)
/*
	move 2 from 0 to 1
	remove child(2) from ex parent(0) array childs
	change ex parentId from child(2) to new parentId(1)
	add child(2) to(1) new parent array childs
*/
