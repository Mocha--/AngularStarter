import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
// import path from 'path';
import webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common.config';

const webpackDevServerConfig: WebpackDevServer.Configuration = {
    // contentBase: path.resolve(__dirname, '../src'),
    port: 7900,
    host: '0.0.0.0',
    hot: true,
    open: true,
    overlay: {
        errors: true,
        warnings: false
    }
};

const config: webpack.Configuration = webpackMerge(commonConfig, {
    mode: 'development',
    devServer: webpackDevServerConfig,
    module: {
        rules: [{
            test: /\.ts$/,
            loaders: ['ts-loader', 'angular2-template-loader']
        }, {
            test: /\.styl$/,
            loaders: ['style-loader', 'css-loader', 'postcss-loader', 'stylus-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

export default config;
