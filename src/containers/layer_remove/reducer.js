import * as types from './constants'
import { fromJS } from 'immutable'

let id = 1;


// add child (type, parent, props)
/*
const normalizerState = {
	elements: {
		1: {
			id: 1,
			parent: 1,
			type: 'BoxLayer',
			props: {
				children: [2, 3],
				elementStyles: { key: value }
			} 
		},
		2: {
			id: 2,
			parent: 1,
			type: 'TitleLayer',
			props: {
				children: 'Title text',
				elementStyles: { key: value }
			}
		},
		3: {
			id: 3,
			parent: 1,
			type: 'BoxLayer',
			props: {
				children: [4],
				elementStyles: { key: value }
			}
		},
		4: {
			id: 4,
			parent: 3,
			type: 'TitleLayer',
			props: {
				children: [],
				elementStyles: { key: value }
			}
		},
	},
	// layer: 0 default
}
*/
const initialState = {
	id: 0,
	props: {
		classNames: ['react-layout-components--box'],
		elementStyles: {'fit': true}
	},
	childs: [/*
		{
			id: 1,
			type: 'BoxLayer',
			props: {
				classNames: ['default'],
				elementStyles: {
					fit: true
				},
				childs: []
			},
			childs: [],
			dashboard: { selected: true }
		}
		,{
			id: 2,
			type: 'Subtitle',
			props: {
				classNames: [],
				elementStyles: []
			},
			childs: 'Title',
			dashboard: { selected: true }
		}*/
	],
	dashboard:{ selected: [] },
	selected: true,
	selected2: null,
	direction: 'row'
}

const layer = (state = initialState, action) => {
	switch (action.type) {
		case types.SELECT_LAYER:
			return Object.assign({}, state, { selected: action.selected })

		case types.ADD_CHILD:

			if (state.id === action.id) {
				//console.log(action)
				return Object.assign({}, state, { childs: [...state.childs, {
					id: id++, type: action.child.type, childs: [], props: {
						classNames: ['react-layout-components--box'],
						elementStyles: {'fit': true}
					}
				}]})
			}

			return Object.assign({}, state, { childs: state.childs.map( item => {
				if (item.id === action.id) 
					item.childs.push({id: id++, type: action.child.type, childs: [], props: {
						classNames: ['react-layout-components--box'],
						elementStyles: {'fit': true}
					}})
				
				return item
			})})


		case types.TOGGLE_DIRECTION:
			return Object.assign({}, state, { direction: action.direction })

		case types.SELECT_ELEMENT:
			return Object.assign({}, state, { selected2: action.element })

		case types.CHANGE_COLOR:
			let styles = Object.assign({}, state.props.elementStyles)
			styles['backgroundColor'] = action.color
			return Object.assign({}, state, { props: {elementStyles: { ...styles }}})

		case types.TOGGLE_SELECT:
			let selectedIds = Object.assign([], [...state.dashboard.selected])

			if(selectedIds.includes(action.id)) {
				let index = selectedIds.indexOf(action.id)
				selectedIds.splice(index, 1)
			}else{
				selectedIds.push(action.id)
			}
			return Object.assign({}, state, { dashboard: {selected: [...selectedIds] }})

		default:
			return state
	}
}

export default layer