import React, {Component, PropTypes} from 'react'
import ReactDOM from 'react-dom';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as Actions from './actions'

class FileDownload extends Component {

	constructor(props) {
		super(props)
		this.download = this.download.bind(this)
	}

	static propTypes = {
		label: React.PropTypes.string.isRequired,
		url: React.PropTypes.string.isRequired,
		method: React.PropTypes.string
	};

	static defaultProps = {
		method: 'GET'
	};

	download() {
		let { url, dataTree, method, download } = this.props

		download.file( url, dataTree, method )
	}

	componentDidUpdate() {
		let { didInvalidate, isFetching, blobUrl, download } = this.props

		// if download success call function
		if (!didInvalidate && !isFetching && blobUrl != null){
			let tempLink = document.createElement('a')
			tempLink.setAttribute('href', blobUrl)
			tempLink.setAttribute('download', 'filename.zip')
			document.body.appendChild(tempLink)
			tempLink.click()
			document.body.removeChild(tempLink)
			download.clear()
		}
	}

	render(){
		const { download, label } = this.props
		return (
			<button onClick={ this.download }>
				{ label }
			</button>
		)
	}
}

const mapStateToProps = ({widgetDownlaodReducer, layerReducer}) => {
	return { 
		isFetching: widgetDownlaodReducer.isFetching,
		didInvalidate: widgetDownlaodReducer.didInvalidate,
		message: widgetDownlaodReducer.message,
		blobUrl: widgetDownlaodReducer.blobUrl,
		dataTree: {
			type: 'box',
			childs: layerReducer.childs,
			props: layerReducer.props
		}
	}
}

const mapDispatchToProps = dispatch => {
	return { download: bindActionCreators(Actions, dispatch)}
}

export default connect(mapStateToProps, mapDispatchToProps)(FileDownload)