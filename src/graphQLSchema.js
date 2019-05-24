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

import activitiesResolvers from './activities/resolvers';
import lugaresResolvers from './lugares/resolvers';

// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		'scalar Upload',
		activitiesTypeDef,
		lugaresTypeDef
	],
	[
		activitiesQueries,
		lugaresQueries
	],
	[
		activitiesMutations,
		lugaresMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		lugaresResolvers,
		activitiesResolvers
	)
});
