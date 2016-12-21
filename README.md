# page-builder

todo
addElement id, initial state


initialState = {
	elements: {
		1: {
			id: 1,
			type: 'layer',
			props: {
				styles: [{key: value}],
				children: [2, 3]
			}
		},
		2: {
			id: 2,
			parent: 1,
			type: 'box',
			props: {
				children: []
			}
		},
		3: {
			id: 3,
			parent: 1,
			type: 'title',
			props: {
				children: 'hola'
			}
		}
	},
	tree: {
		1: 
	}
}



layer-box component

	elementState = {
		id: @react-uniqueid
		partent: @requiered parent id
		props: { // @Styled-components
			elementStyles: { key: value }
			classNames: []
		}
		childs[]
	}

	actions
		setParentId
		addElementStyle
		addClass
		addChild
		




order object in layer
delete object in layer
edit object in layer
resize objects


compras
mueble para baño 70*20
mueble para cocina 40*80h
plumero
picaporte completo
picaporte exterior
barniz
pinceles
aguarrás
tarugos y tornillos para ladrillo hueco
cepillo
organizador de cubiertos
jabonera
lysoform
fuyi de pared
pitusitos para mueble drogadicto
tapete para baño
jabón líquido
colador chico (tipo té)
colador grande