const path = require('path');

module.exports = {
    entry: {
        caloriecalc: './scripts/caloriecalc.js',
        watercalc: './scripts/watercalc.js'
    },

    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist')
    },
};