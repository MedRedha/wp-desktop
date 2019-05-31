module.exports = {
	presets: [
		[ '@babel/env', { targets: { electron: '4.2.0' } } ],
		'@babel/react'
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-syntax-dynamic-import',
	]
};
