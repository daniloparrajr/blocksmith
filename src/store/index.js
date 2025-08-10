import apiFetch from '@wordpress/api-fetch';
import { createReduxStore, register } from '@wordpress/data';

const DEFAULT_STATE = {
	icons: {}, // Object keyed by slug: { name, slug, svg }
};

// ACTIONS
const actions = {
	// Add or update a single icon in the store
	addIcon( name, slug, svg ) {
		return {
			type: 'ADD_ICON',
			icon: { name, slug, svg },
		};
	},

	// Replace all icons in the store (bulk set)
	setIcons( icons ) {
		return {
			type: 'SET_ICONS',
			icons,
		};
	},
};

// REDUCER
const reducer = ( state = DEFAULT_STATE, action ) => {
	switch ( action.type ) {
		case 'ADD_ICON':
			return {
				...state,
				icons: {
					...state.icons,
					[ action.icon.slug ]: action.icon,
				},
			};

		case 'SET_ICONS':
			// Expecting an array of icons and converting to object keyed by slug
			const iconsBySlug = action.icons.reduce( ( acc, icon ) => {
				acc[ icon.slug ] = icon;
				return acc;
			}, {} );
			return {
				...state,
				icons: iconsBySlug,
			};

		default:
			return state;
	}
};

// SELECTORS
const selectors = {
	// Get a single icon by slug
	getIcon( state, slug ) {
		return state.icons[ slug ] || null;
	},

	// Get all icons as an array
	getIcons( state ) {
		return Object.values( state.icons );
	},
};

// RESOLVERS (for fetching from REST API)
const resolvers = {
	// Fetch all icons from `/wp-json/blocksmith/icons`
	*getIcons() {
		const path = '/blocksmith/icons';
		const icons = yield apiFetch( { path } );
		return actions.setIcons( icons );
	},

	// Fetch a single icon from `/wp-json/blocksmith/icons/{slug}`
	*getIcon( slug ) {
		const path = `/blocksmith/icons/${ slug }`;
		const icon = yield apiFetch( { path } );
		return actions.addIcon( icon.name, icon.slug, icon.svg );
	},
};

// CREATE STORE
const store = createReduxStore( 'blocksmith/icons', {
	reducer,
	actions,
	selectors,
	resolvers,
} );

// REGISTER STORE
register( store );
