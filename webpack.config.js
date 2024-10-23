const path = require('path');

module.exports = {
    // When the mode value is set to 'production', the output is optimized,
    // and when set to 'development', the JS files are output with source maps enabled.
    // mode: 'development',

    // The main JavaScript file (entry point)
    entry: {
        topPage: path.resolve(__dirname, './src/content_scripts/topPage.ts'),
        notTopPage: path.resolve(
            __dirname,
            './src/content_scripts/notTopPage.ts'
        ),
        login: path.resolve(__dirname, './src/content_scripts/login.ts'),
        editMode: path.resolve(__dirname, './src/content_scripts/editMode.ts'),
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        clean: true,
    },

    module: {
        rules: [
            {
                // For files with the .ts extension
                test: /\.ts$/,
                // Use ts-loader to compile TypeScript
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },

    // To resolve .ts files when using import statements
    // Without this, you would need to specify the file extension in import statements.
    // In frontend development, it's common to omit the file extension, so this helps avoid potential issues.
    resolve: {
        // Specify extensions as an array
        extensions: ['.ts', '.js'],
    },
    devtool: 'cheap-module-source-map', // Without this, source-map-related errors may occur
};
