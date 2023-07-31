<div style="text-align: center;" align="center">

# egg-alipay-crypto

扩展支持支付宝加解密 nodejs 版本的 egg 插件

[![NPM version][npm-image]][npm-url]
[![Codacy Badge][codacy-image]][codacy-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]
[![License][license-image]][license-url]

[![Sonar][sonar-image]][sonar-url]

</div>

<div style="text-align: center; margin-bottom: 20px;" align="center">

</div>

## Install

```bash
# use pnpm
$ pnpm install egg-alipay-crypto

# use yarn
$ yarn add egg-alipay-crypto
```

## Usage

```js
// {app_root}/config/plugin.js
exports.alipaycrypto = {
  enable: true,
  package: 'egg-alipay-crypto'
}
```

## Configurations

egg-alipay-crypto support all alipay-crypto's configurations, check [alipay-crypto documents](https://github.com/saqqdy/alipay-crypto) to get more information.

```js
// {app_root}/config/config.default.js
exports.alipaycrypto = {
  privateKey: ''
}
```

### Use in service

```js
// {app_root}/app/service/home.js
const { Service } = require('egg')

class HomeService extends Service {
  async index() {
    const { ctx, app } = this
    const data = {
      app_id: '20135234674',
      method: 'alipay.system.oauth.token',
      sign_type: 'RSA2',
      version: '1.0',
      charset: 'utf-8',
      timestamp: '2023-07-29 14:50:22',
      grant_type: 'authorization_code',
      biz_content: ''
    }

    const initial = ctx.serializedParams(data) // 'app_id=20135234674&charset=utf-8&grant_type=authorization_code&method=alipay.system.oauth.token&sign_type=RSA2&timestamp=2023-07-29 14:50:22&version=1.0'
    const sign = ctx.alipaySign(initial) // or => const sign = ctx.alipaySign(data)
    const md5_result = ctx.md5(data)
    // or
    const initial = app.alipaycrypto.serializedParams(data)
    const sign = app.alipaycrypto.encrypt(initial)
    const md5_result = app.alipaycrypto.md5(data)
  }
}

module.exports = HomeService
```

## Change logs

[Change logs](./CHANGELOG.md)

## Questions & Suggestions

Please open an issue [here](https://github.com/saqqdy/egg-alipay-crypto/issues).

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/egg-alipay-crypto.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-alipay-crypto
[codacy-image]: https://app.codacy.com/project/badge/Grade/f70d4880e4ad4f40aa970eb9ee9d0696
[codacy-url]: https://www.codacy.com/gh/saqqdy/egg-alipay-crypto/dashboard?utm_source=github.com&utm_medium=referral&utm_content=saqqdy/egg-alipay-crypto&utm_campaign=Badge_Grade
[snyk-image]: https://snyk.io/test/npm/egg-alipay-crypto/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-alipay-crypto
[download-image]: https://img.shields.io/npm/dm/egg-alipay-crypto.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-alipay-crypto
[license-image]: https://img.shields.io/badge/License-MIT-blue.svg
[license-url]: LICENSE
[sonar-image]: https://sonarcloud.io/api/project_badges/quality_gate?project=saqqdy_egg-alipay-crypto
[sonar-url]: https://sonarcloud.io/dashboard?id=saqqdy_egg-alipay-crypto
