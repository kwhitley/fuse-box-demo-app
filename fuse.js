const { src, task, exec, context } = require('fuse-box/sparky')
const {
  FuseBox,
  BabelPlugin,
  JSONPlugin,
  CSSPlugin,
  CSSResourcePlugin,
  SassPlugin,
  LESSPlugin,
  WebIndexPlugin,
  QuantumPlugin
} = require('fuse-box')

const clientConfig = isProduction => ({
  homeDir: 'src',
  output: 'dist/client/$name.js',
  hash: isProduction,
  debug: !isProduction,
  cache: !isProduction,
  sourceMaps: true,
  useJsNext : ["antd"],
  plugins: [
    BabelPlugin({
      config: {
        sourceMaps: !isProduction,
        presets: [ 'env', 'react' ],
        plugins: [
          'transform-class-properties',
          'transform-object-rest-spread',
          'transform-function-bind',
          'transform-runtime'
        ],
      },
    }),
    [
      SassPlugin(),
      CSSPlugin()
    ],
    [
      LESSPlugin(),
      CSSPlugin()
    ],
    [
      CSSResourcePlugin({
        dist: 'dist/client/assets/',
        resolve: f => `/assets/${f}`
      }),
      CSSPlugin()
    ],
    CSSPlugin(),
    WebIndexPlugin({
      title: 'Fuse Box Demo',
      target: 'index.html',
      template: 'src/client/index.html',
      bundles: ['app', 'vendor']
    }),
    isProduction && QuantumPlugin({
      manifest : true,
      target: 'browser',
      replaceTypeOf: false,
      uglify: true,
      bakeApiIntoBundle: true,
      css: {
        clean: true
      }
    })
  ]
})

const serverConfig = isProduction => ({
  homeDir: 'src',
  output: 'dist/$name.js',
  debug: true,
  sourceMaps: true,
  plugins: [
    BabelPlugin({
      config: {
        sourceMaps: true,
        presets: [ 'env', 'react' ],
        plugins: [
          'transform-class-properties',
          'transform-object-rest-spread',
          'transform-function-bind',
          'transform-runtime'
        ],
      },
    }),
    JSONPlugin(),
  ]
})

task('default', async context => {
  await src('./dist')
      .clean('dist/')
      .exec()

  const client = FuseBox.init(clientConfig(false))
  const server = FuseBox.init(serverConfig(false))
  client.dev({ port: 4445, httpServer: false })

  client
    .bundle('app')
    .instructions(' > client/index.jsx')
    .watch('src/client/**')
    .hmr()

  server
    .bundle('server')
    .instructions(' > [server/index.js]')
    .watch('src/server/**')
    .completed(proc => proc.start())

  await client.run()
  await server.run()
})

task('build', async context => {
  await src('./dist')
      .clean('dist/')
      .exec()

  const client = FuseBox.init(clientConfig(true))
  const server = FuseBox.init(serverConfig(true))

  client
    .bundle('vendor')
    .instructions('~ client/index.jsx')

  client
    .bundle('app')
    .instructions('!> [client/index.jsx]')

  server
    .bundle('server')
    .instructions(' > [server/index.js]')
    .completed(proc => proc.exec())

  await client.run()
  await server.run()
})
