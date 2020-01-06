const path = require('path');

module.exports = {
    entry: './scripts/caloriecalc.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
};