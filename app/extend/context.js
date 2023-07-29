

module.exports = {
	/**
	 * decryptWxMsg
	 *
	 * @param {object} data wx encrypt data
	 * @param {object} options alipaycrypto options
	 * @return {object} result
	 */
	async decryptWxMsg(data, options) {
		data = data || this.request.body

		const { encrypt, timestamp, nonce } = data
		return await this.app.alipaycrypto.decrypt(encrypt, timestamp, nonce, options)
	},

	/**
	 * decryptWxMsg
	 *
	 * @param {object} data wx encrypt data
	 * @param {object} options alipaycrypto options
	 * @return {object} result
	 */
	async encryptWxMsg(data, options) {
		data = data || this.request.body

		return await this.app.alipaycrypto.encrypt(data, options)
	}
}
