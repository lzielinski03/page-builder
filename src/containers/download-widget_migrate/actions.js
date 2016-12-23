import * as types from './constants'
import fetch from 'isomorphic-fetch'

export const file = (url, body, method) => {

	return dispatch => {
		dispatch(requestDownload(url))

		return fetchUrl(url, body, method).then(
			success => dispatch(downloadSuccess(success)),
			error => dispatch(downloadError("Error in file download.", error))
		)
	}
}

const requestDownload = url => {
	return { type: types.DOWNLOAD_REQUEST, url }
}

export const clear = (resetState) => {
	return { type: types.CLEAR_DOWNLOAD, resetState }
}

const downloadSuccess = blobUrl => {
	return { type: types.DOWNLOAD_SUCCESS, blobUrl }
}
	
const downloadError = (message, error) => {
	return { type: types.DOWNLOAD_ERROR, message, error}
}

const fetchUrl = (url, body, method) => {
	return fetch(url, {
		method: method, 
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(body)
	})
	.then( file => {
		return file.blob()
	}).then( blob => {
		return window.URL.createObjectURL(blob)
	});
}