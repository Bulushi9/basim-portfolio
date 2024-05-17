const path = require('path');

module.exports = {
    entry: './src/components/App.js', 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "url": require.resolve("url/"),
            "stream": require.resolve("stream-browserify"),
            "assert": require.resolve("assert/"),
            "util": require.resolve("util/"),
            "zlib": require.resolve("browserify-zlib")
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
