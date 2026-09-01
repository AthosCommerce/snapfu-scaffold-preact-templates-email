import { SnapTemplates, validateTemplatesConfig } from '@athoscommerce/snap-preact';
import { globalStyles } from './styles';

const templatesConfig = validateTemplatesConfig({
	config: {
		siteId: '{{ snapfu.siteId }}',
		platform: '{{ snapfu.variables.platform }}',
		language: 'en',
		currency: 'usd',
	},
	// plugins: {},
	// components: {
	// 	result: {
	// 		CustomResult: async () => (await import('./components/Result')).CustomResult,
	// 	},
	// },
	theme: {
		extends: 'base',
		style: globalStyles,
		// variables: {
		// 	colors: {}
		// },
		// overrides: {
		// 	default: {
		// 		'recommendationEmail': {
		// 			// resultComponent: 'CustomResult',
		// 		},
		// 	},
		// },
	},
});

new SnapTemplates(templatesConfig);
