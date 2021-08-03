const path = require('path')

module.exports = {
    mode: 'development',
    entry: {
        'contexts': './src/contexts/index.js',
        'hooks': './src/hooks/index.js',
        'components': './src/components/index.js'
    },
    target: 'node',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        library: {
            name: 'myLib',
            type: 'umd',
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            'react': path.join(__dirname, './node_modules/react')
        }
    },
    externals: {
        react: {
            commonjs: 'react',
            commonjs2: 'react',
            amd: 'react',
            umd: 'react',
            root: 'React'
        }
    }
}