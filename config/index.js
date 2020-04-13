const devCnofig = require('./dev')
const prodCnofig = require('./prod')

const isProduction = process.env.NODE_ENV === 'production'
console.log('isProduction',isProduction)
console.log('isProduction','production')
console.log('isProduction',process.env.NODE_ENV)
console.log('isProduction',process.env.NODE_ENV === 'production')

module.exports = Object.assign({
  appName: 'fancy-team-homepage', // 项目名称(不能为空)
  showWebpackLog: true, // 是否显示webpack打包log（仅在dev模式生效）
}, isProduction ? prodCnofig : devCnofig)
