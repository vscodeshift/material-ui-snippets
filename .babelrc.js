module.exports = function (api) {
  const plugins = ['@babel/plugin-transform-runtime']
  const presets = [
    ['@babel/preset-env', { targets: { node: 10 } }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ]

  if (api.env('coverage')) {
    plugins.push('babel-plugin-istanbul')
  }

  return { plugins, presets }
}
