import * as types from './constants'

const initialState = {
	isFetching: null,
    didInvalidate: null,
    message: null,
    blobUrl: null
}

const widgetDownload = (state = initialState, action) => {

	switch(action.type) {

		case types.DOWNLOAD_REQUEST:
			return Object.assign({}, state, { 
				isFetching: true,
				didInvalidate: null,
				message: null
			})

		case types.DOWNLOAD_SUCCESS:
			return Object.assign({}, state, {
				blobUrl: action.blobUrl,
				isFetching: false,
				didInvalidate: false
			})

		case types.DOWNLOAD_ERROR:
			return Object.assign({}, state, {
				didInvalidate: true,
				isFetching: false,
				message: action.message
			})

		case types.CLEAR_DOWNLOAD:
			return Object.assign({}, initialState)
			
		default:
			return state
	}
}

export default widgetDownload