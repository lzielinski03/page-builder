import * as types from './constants'

const initialState = {
	id: 0,
	props: {
		classNames: ['react-layout-components--box'],
		elementStyles: [{'fit': true}]
	},
	childs: [/*
		{
			type: 'Box',
			props: {
				classNames: ['default'],
				elementStyles: []
			},
			childs: []
		},
		{
			type: 'Subtitle',
			props: {
				classNames: [],
				elementStyles: []
			},
			childs: 'Title'
		}*/
	]/*
	,
	selected: true,
	selected2: null,
	direction: 'row'*/
}

const box = (state = initialState, actions) => {
	//console.log('reducer')
	switch(actions.type) {
		case types.ADD_CHILD2:
		//console.log(actions)
		//console.log(Object.assign({}, state, {childs: [...state.childs, actions.payload]}))
			return Object.assign({}, state, {childs: [...state.childs, actions.payload]})
		default:
			return state
	}
}

export default box