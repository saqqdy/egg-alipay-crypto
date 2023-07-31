const AlipayCrypto = require('alipay-crypto')

module.exports = app => {
	/**
	 * alipaycrypto instance
	 */
	const { privateKey, debug = false } = app.config.alipaycrypto
	app.alipaycrypto = new AlipayCrypto({ privateKey, debug })
}
