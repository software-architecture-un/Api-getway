import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	activitiesMutations,
	activitiesQueries,
	activitiesTypeDef
} from './activities/typeDefs';

import {
	lugaresMutations,
	lugaresQueries,
	lugaresTypeDef
} from './lugares/typeDefs';

import {
	listsMutations,
	listsQueries,
	listsTypeDef
} from './lists/typeDefs';

import activitiesResolvers from './activities/resolvers';
import lugaresResolvers from './lugares/resolvers';
import listsResolvers from './lists/resolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		'scalar Upload',
		activitiesTypeDef,
		lugaresTypeDef,
		listsTypeDef
	],
	[
		activitiesQueries,
		lugaresQueries,
		listsQueries
	],
	[
		activitiesMutations,
		lugaresMutations,
		listsMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		lugaresResolvers,
		activitiesResolvers,
		listsResolvers
	)
});
