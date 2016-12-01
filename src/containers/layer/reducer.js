import * as types from './constants'
import { fromJS } from 'immutable'

let id = 1;

const initialState = {
	id: 0,
	props: {
		classNames: ['react-layout-components--box'],
		elementStyles: [{'fit': true}]
	},
	childs: [/*
		{
			id: 1,
			type: 'BoxLayer',
			props: {
				classNames: ['default'],
				elementStyles: [],
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
	dashboard:{ selected: [{id: 1}] },
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
						elementStyles: [{'backgroundColor': 'red'}]
					}
				}]})
			}

			return Object.assign({}, state, { childs: state.childs.map( item => {
				if (item.id === action.id) 
					item.childs.push({id: id++, type: action.child.type, childs: [], props: {
						classNames: ['react-layout-components--box'],
						elementStyles: [{'fit': true}]
					}})
				
				return item
			})})


		case types.TOGGLE_DIRECTION:
			return Object.assign({}, state, { direction: action.direction })

		case types.SELECT_ELEMENT:
		console.log('select')
			return Object.assign({}, state, { selected2: action.element })

		case types.TOGGLE_SELECT:
			console.log('toggleSelect')
			return Object.assign({}, state, { dashboard: {selected: [...state.dashboard.selected, { id: action.id } ]}})


		default:
			return state
	}
}

export default layer