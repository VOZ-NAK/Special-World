export default {
	trailingComma: 'none',
	tabWidth: 2,
	useTabs: true,
	singleQuote: true,
	jsxSingleQuote: true,
	arrowParens: 'avoid',
	semi: false,
	plugins: ['@trivago/prettier-plugin-sort-imports'],
	importOrder: [
		'<THIRD_PARTY_MODULES>',
		'^@/store/(.*)$',
		'^@/entities/(.*)$',
		'^@/features/(.*)$',
		'^@/shared/(.*)$',
		'^@/assets/(.*)$',
		'^@/utils/(.*)$',
		'^@/config/(.*)$',
		'^@/providers/(.*)$',
		'^@/widgets/(.*)$',
		'^../(.*)',
		'^./(.*)',
		'(.scss)$'
	],
	importOrderSeparation: true,
	importOrderSortSpecifiers: true
}
