const postMessage = data => {
	const hasRNPostMessage =
		window && window.ReactNativeWebView && window.ReactNativeWebView.postMessage

	if (hasRNPostMessage) {
		const dataStringify = JSON.stringify(data)

		window.ReactNativeWebView.postMessage(dataStringify)
	}
}

export default postMessage
