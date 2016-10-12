const Config: {
	fontSet: [
		{
			id: '',
			name: '',
			fontFamily: '',
			size: ''
		}
	]
	type: 'config',
}

const Layer: {
	properties: {
		shadow: ''
	},
	type: 'element',
	childs: [
		box: {}
	]
}

const Box: {
	properties: {
		fit: true,
		backgroundColor: ''
	},
	type: 'element',
	childs: [
		box: {}
	]
}

const Subtitle: {
	properties: {
		fontSetId: '',
		color: '',
		align: ''
	},
	type: 'text',
	value: ''
}

const SearchNew: {
	properties: {
		fontSetId: ''||null,
	},
	type: 'component',
	childs: [
		box: {}
	]
}