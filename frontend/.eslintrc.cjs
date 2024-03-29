module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true
	},
	extends: [
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'standard',
		'eslint-config-prettier'
	],
	overrides: [],
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module'
	},
	plugins: ['react'],
	rules: {
		'react/prop-types': 0,
		'import/no-absolute-path': 'off'
	},
	settings: {
		'import/resolver': {
			node: {
				moduleDirectory: ['node_modules', 'src/']
			}
		}
	}
};
