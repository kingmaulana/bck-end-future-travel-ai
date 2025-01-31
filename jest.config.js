export default {
testEnvironment: 'node',
moduleFileExtensions: ['js', 'mjs', 'cjs', 'jsx', 'ts', 'tsx', 'json', 'node'],
transform: {},
moduleNameMapper: {
    '^(\\.{1,2}/.*)\\.js$': '$1',
},
testMatch: [
    '**/__tests__/**/*.js',
    '**/?(*.)+(spec|test).js'
],
}

