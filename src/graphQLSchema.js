import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema} from 'graphql-tools';
import { mergeSchemas } from './utilities';
import { GraphQLUpload} from 'apollo-server'

import {
	activitiesMutations,
	activitiesQueries,
	activitiesTypeDef
} from './activities/typeDefs';

import {
	scoreresourcesMutations,
	scoreresourcesQueries,
	scoreresourcesTypeDef
} from './scoreresources/typeDefs';


import {
	usersMutations,
	usersQueries,
	usersTypeDef
} from './users/typeDefs';

import {
	listsMutations,
	listsQueries,
	listsTypeDef
} from './lists/typeDefs';

import {
	trailsTypeDef,
	trailsQueries,
	trailsMutations
} from './trails/typeDefs';

import {
	interfaceTypeDef,
	interfaceMutations
} from './interface/typeDefs';




import activitiesResolvers from './activities/resolvers';
import scoreresourcesResolvers from './scoreresources/resolvers';
import listsResolvers from './lists/resolvers';
import usersResolvers from './users/resolvers';
import trailsResolvers from './trails/resolvers';
import interfaceResolvers from './interface/resolvers';



// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		'scalar Upload',
		activitiesTypeDef,
		scoreresourcesTypeDef,
		listsTypeDef,
		usersTypeDef,
		trailsTypeDef,
		interfaceTypeDef,
	],
	[
		activitiesQueries,
		scoreresourcesQueries,
		listsQueries,
		usersQueries,
		trailsQueries,
	],
	[
		activitiesMutations,
		scoreresourcesMutations,
		listsMutations,
		usersMutations,
		trailsMutations,
		interfaceMutations,
	]

);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		{ Upload: GraphQLUpload} ,
		activitiesResolvers,
		scoreresourcesResolvers,
		usersResolvers,
		listsResolvers,
		trailsResolvers,
		interfaceResolvers
	)

});
