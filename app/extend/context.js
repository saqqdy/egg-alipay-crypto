module.exports = {
	/**
	 * serializedParams
	 *
	 * @param {object} data  Data to be serialized, Strike out the sign field, and strike out parameters with null values.
	 * @return {string} result
	 */
	serializedParams(data) {
		data = data || this.request.query

		return this.app.alipaycrypto.serializedParams(data)
	},

	/**
	 * alipaySign
	 *
	 * @param {object, string} data Serialized data
	 * @param {string} privateKey private key
	 * @return {string} result
	 */
	alipaySign(data, privateKey) {
		data = data || this.request.query

		return this.app.alipaycrypto.encrypt(data, privateKey)
	},

	/**
	 * md5 encrypt
	 *
	 * @param {object, string} data object or string
	 * @return {string} result
	 */
	md5(data) {
		return this.app.alipaycrypto.md5(data)
	}
}
