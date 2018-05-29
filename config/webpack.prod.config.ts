import webpack from 'webpack';
import path from 'path'
import webpackMerge from 'webpack-merge';
import commonConfig from './webpack.common.config';
import CleanWebpackPlugin from 'clean-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

const config: webpack.Configuration = webpackMerge(commonConfig, {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash].js'
    },
    plugins: [
        new CleanWebpackPlugin('dist', {
            root: path.resolve(__dirname, '../'),
            verbose: true
        })
    ]
});

export default config;
