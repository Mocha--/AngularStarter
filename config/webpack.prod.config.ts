import webpack from 'webpack';
import path from 'path';
import webpackMerge from 'webpack-merge';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import commonConfig from './webpack.common.config';
import {AngularCompilerPlugin} from '@ngtools/webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: webpack.Configuration = webpackMerge(commonConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /(?:\.ngfactory\.js|\.ngstyle\.js|\.ts)$/,
            loader: '@ngtools/webpack'
        }, {
            test: /\.styl$/,
            loaders: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'stylus-loader']
        }]
    },
    plugins: [
        new CleanWebpackPlugin('dist', {
            root: path.resolve(__dirname, '../'),
            verbose: true
        }),
        new AngularCompilerPlugin({
            tsConfigPath: path.resolve(__dirname, '../tsconfig.json'),
            entryModule: path.resolve(__dirname, '../src/App/App.module#AppModule')
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash].css'
        })
    ]
});

export default config;
