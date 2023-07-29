const AlipayCrypto = require('alipay-crypto')

module.exports = app => {
	/**
	 * alipaycrypto
	 */
	const { token, aesKey, appId, options = {} } = app.config.alipaycrypto
	app.alipaycrypto = new AlipayCrypto(token, aesKey, appId, options)
}
